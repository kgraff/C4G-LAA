function Resource(ID, categoryID, name, phone, address, city, state, zip, description, serviceHours, eligibility, intakeProcedure, documents, fees, languages, services, website) {
	this.ID = ID;
	this.categoryID = categoryID;
	this.name = name;
	this.phone = phone;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.description = description;
	this.serviceHours = serviceHours;
	this.eligibility = eligibility;
	this.intakeProcedure = intakeProcedure;
	this.documents = documents;
	this.fees = fees;
	this.languages = languages;
	this.services = services;
	this.website = website;
	
	this.create = function() {
		return $.ajax({
			url : apiHost + "api/resource",
			data : {
				'categoryID' : this.categoryID,
				'name' : this.name,
				'phone' : this.phone,
				'address' : this.address,
				'city' : this.city,
				'state' : this.state,
				'zip' : this.zip,
				'description' : this.description,
				'serviceHours' : this.serviceHours,
				'eligibility' : this.eligibility,
				'intakeProcedure' : this.intakeProcedure,
				'documents' : this.documents,
				'fees' : this.fees,
				'languages' : this.languages,
				'services' : this.services,
				'website' : this.website
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
	
	this.read = function() {
		return $.ajax({
			url : apiHost + "api/resource/id/" + this.ID,
			context : document.body,
			async : false,
			type : 'GET',
			dataType : "json",
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

	this.update = function() {
		return $.ajax({
			url : apiHost + "api/resource/id/" + this.ID,
			data : {
				'categoryID' : this.categoryID,
				'name' : this.name,
				'phone' : this.phone,
				'address' : this.address,
				'city' : this.city,
				'state' : this.state,
				'zip' : this.zip,
				'description' : this.description,
				'serviceHours' : this.serviceHours,
				'eligibility' : this.eligibility,
				'intakeProcedure' : this.intakeProcedure,
				'documents' : this.documents,
				'fees' : this.fees,
				'languages' : this.languages,
				'services' : this.services,
				'website' : this.website
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

	this.delete = function() {
		return $.ajax({
			url : apiHost + "api/resource/id/" + this.ID,
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
	
	this.readAllByCategory = function() {
		return $.ajax({
			url : apiHost + "api/resourcesByCategory/categoryID/" + this.categoryID,
			context : document.body,
			async : false,
			type : 'GET',
			dataType : "json",
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
