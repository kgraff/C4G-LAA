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
					$('#chooseMainCategoryList').append('<a href="#" class="list-group-item" onclick="event.preventDefault();categoryButtonActions(this);" categoryID="' + data[key].ID + '">' +
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
			$('#chooseSubCategoryList').append('<a href="#" class="list-group-item" onclick="event.preventDefault();categoryButtonActions(this);" categoryID="' + key + '">' +
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

function categoryButtonActions(category){
	populateSubCategoryList(category);
	populateChosenMainCategory(category);
	populateResourceList(category);
}

function populateResourceList(chosenCategory) {
	$('#chooseResourceList').empty();
	// Retrieve all resources for the chosen category
	var category = new Category(null, null, null, null);
	var promise = category.readAll();
	promise.success(function(data) {
			console.log("attempt: " + data);
			// iterate through each category returned and add it to the category list and
			// populate the object containing the list of categories and their IDs
			$.each(data, function(key, value) {				
				// Append to list of resources on find resource page
				if($('#chooseResourceList') != undefined){
					$('#chooseResourceList').append('<a href="#" class="list-group-item" onclick="event.preventDefault();" resourceID="' + data[key].ID + '">' +
					'</button>' + data[key].name + '</a>');
				}
			});
			if($('#chooseResourceList') != undefined){
				$('#chooseResourceList').btsListFilter('#resourceSearchInput');
			}
	});
	
	promise.error(function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error populating resources.");
	});
}