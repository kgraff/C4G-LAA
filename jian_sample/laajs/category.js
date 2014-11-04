var categories = {};

$(document).ready(function() {
	populateCategoryList();
	console.log(categories);
});

function populateCategoryList() {
	$.ajax({
		url : "http://localhost/laaRest/api/categories",
		context : document.body,
		async : false,
		type : 'GET',
		dataType : "jsonp",
		success : function(data) {
			console.log("Data Success");
			console.log(data);
			$.each(data, function(key, value) {
				console.log(data[key]);
				console.log(data[key].name);
				categories[data[key].name] = data[key].ID;
				$('#categoryList').append("<option value='" + data[key].name + "'>");
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error pre-populating categories.");
		}
	});
}


function createCategory() {
	console.log("createCategory()");
	var valid = validateCategory();
	if (valid == true) {
		console.log("success:" + valid);
		var parentCategory = $('#category').val();
		var parentCategoryID = $('#category').val();
		var name = $('#name').val();
		var description = $('#description').val();

		var category = new Category(parentCategoryID, name, description);
		/*
		 var promise = Category.create();
		 var msg = null;

		 promise.success(function(data) {
		 console.log("attempt: " + data)
		 msg = data;
		 });
		 if (msg != null) {
		 window.open("dashboard.html", "_self");
		 } else {
		 document.getElementById("same").innerHTML = "The email has already been in the database";
		 }
		 */
	}
	else{
		console.log("error: " + valid);
		$('#m1').text("error: " + valid);
	}
}


function validateCategory() {
	console.log("validateCategory()");
	// Double check to ensure parent category is correct if one is chosen
	//Get parent category
	
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

function Category(parentCategoryID, name, description) {
	this.parentCategoryID = parentCategoryID;
	this.name = name;
	this.description = description;

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
				//Alert user of a successful or failed entry
				if(data){
					//notify success and redirect to dashboard
					alert(data);
					window.location = "./dashboard.html";
				}
				else{
					//notify failure and prompt to try again later.
					alert(data + "\nPlease try again later.");
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	};
}