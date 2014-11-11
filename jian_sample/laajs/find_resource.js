var categoryByID = {};
var categoryIdByName = {};

$(document).ready(function() {
	populateMainCategoryList();
	//console.log(categoryIdByName);
	//console.log(categoryByID);
});

function populateMainCategoryList() {
	// Retrieve all categories
	var category = new Category(null, null, null, null);
	var promise = category.readAll();
	promise.success(function(data) {
			console.log("attempt: " + data);
			// iterate through each category returned and add it to the category list and
			// populate the object containing the list of categories and their IDs
			$.each(data, function(key, value) {
				categoryByID[data[key].ID] = {"parentCategoryID": data[key].parentCategoryID, "name": data[key].name, "description": data[key].description};
				categoryIdByName[data[key].name] = data[key].ID; // Add the category name and ID pair
				
				// Append to list of categories on edit page
				// Append only if it is not a subcategory (parentCategoryID = 0), if excluding subcategories
				if($('#chooseMainCategoryList') != undefined){ //  insert this to exclude subcategories: && data[key].parentCategoryID == 0
					$('#chooseMainCategoryList').append('<a href="#" class="list-group-item" onclick="event.preventDefault();populateSubCategoryList(this);populateChosenMainCategory(this);" categoryID="' + data[key].ID + '">' +
					'</button>' + data[key].name + '</a>');
				}
			});
			if($('#chooseMainCategoryList') != undefined){
				$('#chooseMainCategoryList').btsListFilter('#mainSearchInput');
			}
	});
	
	promise.error(function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error pre-populating categories.");
	});
}

function populateChosenMainCategory(mainCategory) {
	$('#chosenMainCategoryName').empty();
	var mainCategoryID = mainCategory.getAttribute("categoryID");
	$('#chosenMainCategoryName').text(categoryByID[mainCategoryID].name);
	// hide the list main categories list
	$('#mainCategoriesListDiv').hide();
	
}

function populateSubCategoryList(mainCategory) {
	$('#chooseSubCategoryList').empty();
	console.log(mainCategory);
	var mainCategoryID = mainCategory.getAttribute("categoryID");
	// iterate through each category returned and add it to the category list and
	// populate the object containing the list of categories and their IDs
	var numSubCategories = 0;
	$.each(categoryByID, function(key, value) {
		// key is the categoryID
		
		// Append to list of categories on edit page
		// Append oonly if it is a subcategory of the chosen main category (parentCategoryID = mainCategoryID)
		if($('#chooseSubCategoryList') != undefined && categoryByID[key].parentCategoryID == mainCategoryID){
			$('#chooseSubCategoryList').append('<a href="#" class="list-group-item" onclick="event.preventDefault();populateSubCategoryList(this);populateChosenMainCategory(this);" categoryID="' + key + '">' +
			'</button>' + categoryByID[key].name + '</a>');
			numSubCategories = numSubCategories + 1;
		}
	});
	
	if(numSubCategories > 0){
		if($('#chooseSubCategoryList') != undefined){
			$('#chooseSubCategoryList').btsListFilter('#subSearchInput');
		}		
	}
}

function populateEditCategoryModal(editButton){
	// The anchor containing the button element contains the categoryID
	// Therefore, the parentNode must be retrieved
	var categoryID = editButton.parentNode.getAttribute("categoryID");
	var chosenCategory = categoryByID[categoryID];
	if(chosenCategory != undefined){
		console.log("success");
		// Populate fields
		if(categoryByID[chosenCategory.parentCategoryID] != undefined)
		{
			$('#category').val(categoryByID[chosenCategory.parentCategoryID].name);
		}
		$('#name').val(chosenCategory.name);
		$('#description').val(chosenCategory.description);
		
		// Populate hidden category id input
		$('#chosenCategoryID').val(categoryID);
	}
	else{
		console.log("error editing the chosen category");
		// close the modal or do something
		alert("error editing the chosen category");
		// close the modal
		setTimeout( "$('#edit_category_modal').modal('hide');", 100 );
	}
}

function populateRemoveCategoryModal(removeButton){
	// The anchor containing the button element contains the categoryID
	// Therefore, the parentNode must be retrieved
	var categoryID = removeButton.parentNode.getAttribute("categoryID");
	var chosenCategory = categoryByID[categoryID];
	if(chosenCategory != undefined){
		console.log("success");
		
		$('#removeCategoryName').text(chosenCategory.name);
		
		// Populate hidden category id input
		$('#chosenCategoryID').val(categoryID);
	}
	else{
		console.log("error removing the chosen category");
		// close the modal or do something
		alert("error removing the chosen category");
		// close the modal
		setTimeout( "$('#remove_category_modal').modal('hide');", 100 );
	}
}

function createCategory() {
	// validate the user input used to create a category
	var valid = validateCategory(0);
	if (valid == true) {
		var parentCategory = $('#category').val();
		var parentCategoryID = categoryIdByName[parentCategory];
		var name = $('#name').val();
		var description = $('#description').val();

		var category = new Category(null, parentCategoryID, name, description);
		var promise = category.create();
		var msg = null;

		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		}); 

		if (msg != null) {
			//notify success (or failure to insert) and redirect to dashboard
			if(msg.return_code == 0){
				alert(msg.message);
				window.open("dashboard.html", "_self");
			}
			else{
				alert("Failed to create category. Please try again later.");
			}
		} else {
			//notify failure and prompt to try again later.
			alert("Failed to create category. Please try again later.");
		}
	}
	else{
		$('#m1').text("error: " + valid); //Display the error to the user
	}
}

function editCategory() {
	// validate the user input used to create a category
	var valid = validateCategory(1);
	if (valid == true) {
		var parentCategory = $('#category').val();
		var parentCategoryID = categoryIdByName[parentCategory];
		var name = $('#name').val();
		var description = $('#description').val();
		// Get the chosen category ID from hidden input
		var ID = $('#chosenCategoryID').val();

		var category = new Category(ID, parentCategoryID, name, description);
		var promise = category.update();
		var msg = null;

		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		}); 

		if (msg != null) {
			//notify success (or failure to update) and redirect to edit/remove category page
			if(msg.return_code == 0){
				alert(msg.message);
				window.open("edit_category.html", "_self");
			}
			else{
				alert("Failed to update category. Please try again later.");
			}
		} else {
			//notify failure and prompt to try again later.
			alert("Failed to update category. Please try again later.");
		}
	}
	else{
		$('#m1').text("error: " + valid); //Display the error to the user
	}
}

function deleteCategory() {
	// Get the chosen category ID from hidden input
	var ID = $('#chosenCategoryID').val();

	var category = new Category(ID, null, null, null);
	var promise = category.delete();
	var msg = null;

	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	}); 

	if (msg != null) {
		//notify success (or failure to delete) and redirect to edit/remove category page
		if(msg.return_code == 0){
			alert(msg.message);
			window.open("edit_category.html", "_self");
		}
		else{
			alert("Failed to delete category. Please try again later.");
		}
	} else {
		//notify failure and prompt to try again later.
		alert("Failed to delete category. Please try again later.");
	}
}

function validateCategory(mode) {
	// mode = 0 for create or 1 for edit
	
	// Check to ensure parent category is correct if one is chosen
	// Get parent category	
	var parentCategory = $('#category').val();
	if(parentCategory != null && parentCategory != "" && categoryIdByName[parentCategory] == undefined){
		return (false, "invalid parent category");
	}
	
	// Ensure the name is not empty
	var categoryName = $('#name').val();
	if(categoryName == null || categoryName == ""){
		return (false, "category name is empty");
	}
	
	// Ensure the name does not already exist (case-sensitive)
	// if creating
	if(mode == 0){
		if(categoryIdByName[categoryName] != undefined){
			return (false, "category already exists");
		}
	}
	// if editing
	if(mode == 1){
		var ID = $('#chosenCategoryID').val();
		// If the edited category name does not match another category (besides the one currently being edited)
		if(ID != categoryIdByName[categoryName] && categoryIdByName[categoryName] != undefined){
			return (false, "category already exists");
		}
	}
	
	return true;
}