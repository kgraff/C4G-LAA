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