var categories = {};

$(document).ready(function() {
	populateCategoryList();
	console.log(categories);
});

function populateCategoryList() {
	// Retrieve all categories
	var promise = Category.readAll();
	promise.success(function(data) {
			console.log("attempt: " + data);
			// iterate through each category returned and add it to the category list and
			// populate the object containing the list of categories and their IDs
			$.each(data, function(key, value) {
				categories[data[key].name] = data[key].ID; // Add the category name and ID pair
				$('#categoryList').append("<option value='" + data[key].name + "'>");
			});
	});
	
	promise.error(function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error pre-populating categories.");
	});
}


function createCategory() {
	// validate the user input used to create a category
	var valid = validateCategory();
	if (valid == true) {
		var parentCategory = $('#category').val();
		var parentCategoryID = categories[parentCategory];
		var name = $('#name').val();
		var description = $('#description').val();

		var category = new Category(null, parentCategoryID, name, description);
		
		var promise = Category.create();
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


function validateCategory() {
	console.log("validateCategory()");
	// Check to ensure parent category is correct if one is chosen
	// Get parent category	
	var parentCategory = $('#category').val();
	if(parentCategory != null && parentCategory != "" && categories[parentCategory] == undefined){
		console.log("invalid parent category");
		return (false, "invalid parent category");
	}
	
	// Ensure the name is not empty
	var categoryName = $('#name').val();
	console.log(categoryName);
	if(categoryName == null || categoryName == ""){
		return (false, "category name is empty");
	}
	
	// Ensure the name does not already exist (case-sensitive)
	var categoryName = $('#name').val();
	if(categories[categoryName] != undefined){
		return (false, "category already exists");
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
				'categoryID' : this.parentCategoryID,
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
				'categoryID' : this.parentCategoryID,
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