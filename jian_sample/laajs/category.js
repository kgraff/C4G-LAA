var categoryByID = {};
var categoryIdByName = {};

$(document).ready(function() {
	populateCategoryList();
	//console.log(categoryIdByName);
	//console.log(categoryByID);
});

function populateCategoryList() {
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
				
				// Append to autocomplete category list datalist on add page and edit modal
				$('#categoryList').append('<option value="' + data[key].name + '">');
				
				// Append to list of categories on edit page
				$('#editCategoryList').append('<a href="#" class="list-group-item" categoryID="' + data[key].ID + '">' +
				'<button type="button" class="btn btn-default btn-xs pull-right" style="margin-left: 10px;"><span class="glyphicon glyphicon-remove"></span></button>' +
				'<button type="button" class="btn btn-default btn-xs pull-right" data-toggle="modal" data-target="#edit_category_modal" onclick="populateEditCategoryModal(this);"><span class="glyphicon glyphicon-pencil"></span>' +
				'</button>' + data[key].name + '</a>');
			});
	});
	
	promise.error(function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error pre-populating categories.");
	});
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
			if(msg == "Successfully inserted category!"){ // FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				alert(msg);
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
			if(msg == "Successfully updated category!"){ // FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				alert(msg);
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
	var name = $('#name').val();
	var description = $('#description').val();
	var ID = categoryIdByName[name]; // Get the current ID

	var category = new Category(ID, null, null, null);
	var promise = category.delete();
	var msg = null;

	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	}); 

	if (msg != null) {
		//notify success (or failure to delete) and redirect to edit/remove category page
		if(msg == "Successfully deleted category!"){ // FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			alert(msg);
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

function Category(ID, parentCategoryID, name, description) {
	this.ID = ID;
	this.parentCategoryID = parentCategoryID;
	this.name = name;
	this.description = description;

	// AJAX call to create a category
	this.create = function() {
		return $.ajax({
			url : "http://localhost/laaRest/api/category",
			data : {
				'parentCategoryID' : this.parentCategoryID,
				'name' : this.name,
				'description' : this.description
			},
			context : document.body,
			async : false,
			type : 'POST',
			dataType : "jsonp",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};
	
	// AJAX call to read a category
	this.read = function() {
		return $.ajax({
			url : "http://localhost/laaRest/api/category/id/" + this.ID,
			context : document.body,
			async : false,
			type : 'GET',
			dataType : "jsonp",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};
	
	// AJAX call to read all categories
	this.readAll = function() {
		return $.ajax({
			url : "http://localhost/laaRest/api/categories",
			context : document.body,
			async : false,
			type : 'GET',
			dataType : "jsonp",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};
	
	// AJAX call to update a category
	this.update = function() {
		return $.ajax({
			url : "http://localhost/laaRest/api/category/id/" + this.ID,
			data : {
				'parentCategoryID' : this.parentCategoryID,
				'name' : this.name,
				'description' : this.description
			},
			context : document.body,
			async : false,
			type : 'PUT',
			dataType : "jsonp",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};
	
	// AJAX call to update a category
	this.delete = function() {
		return $.ajax({
			url : "http://localhost/laaRest/api/category/id/" + this.ID,
			context : document.body,
			async : false,
			type : 'DELETE',
			dataType : "jsonp",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};	
}