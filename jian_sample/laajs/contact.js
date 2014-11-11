function Contact(ID, resourceID, name, email, phone, description) {
	this.ID = ID;
	this.resourceID = resourceID;
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.description = description;

	// AJAX call to create a contact
	this.create = function() {
		return $.ajax({
			url : apiHost + "api/contact",
			data : {
				'resourceID' : this.resourceID,
				'name' : this.name,
				'email' : this.email,
				'phone' : this.phone,
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
	
	// AJAX call to read a contact
	this.read = function() {
		return $.ajax({
			url : apiHost + "api/contact/id/" + this.ID,
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
	
	// AJAX call to read all contacts
	this.readAll = function() {
		return $.ajax({
			url : apiHost + "api/contacts",
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
	
	// AJAX call to read a contact
	this.readAllByResource = function() {
		return $.ajax({
			url : apiHost + "api/contactsByResource/resourceID/" + this.resourceID,
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
	
	// AJAX call to update a contact
	this.update = function() {
		return $.ajax({
			url : apiHost + "api/contact/id/" + this.ID,
			data : {
				'resourceID' : this.resourceID,
				'name' : this.name,
				'email' : this.email,
				'phone' : this.phone,
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
	
	// AJAX call to delete a contact
	this.delete = function() {
		return $.ajax({
			url : apiHost + "api/contact/id/" + this.ID,
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