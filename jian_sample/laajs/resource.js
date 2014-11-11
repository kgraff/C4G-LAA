
function Resourse() {
	this.getRs = function() {
		return $.ajax({
            url: "../laa_webapp/api/resource/id/"+sourceID,
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
    }
    this.updateRs = function () {
    	this.name = document.getElementById("name1").value;
        this.phone = document.getElementById("phone1").value;
        this.address = document.getElementById("address1").value;
        this.city = document.getElementById("city1").value;
        this.state = document.getElementById("state").value;
        this.zip = document.getElementById("zip1").value;
        this.description = document.getElementById("description1").value;
        this.eligibility = document.getElementById("eligibility1").value;
        this.intakeProcedure = document.getElementById("intakeProcedure1").value;
        this.documents = document.getElementById("documents1").value;
        this.fees = document.getElementById("fees1").value;
        this.languages = document.getElementById("languages1").value;
        this.services = document.getElementById("services1").value;
        this.website = document.getElementById("website1").value;
        this.serviceHours = document.getElementById("serviceHours1").value;
    	return $.ajax({
            url : "../laa_webapp/api/resource/id/"+sourceID,
            data : {
            	'id' : sourceID,
                'categoryID' :categoryID,
                'name' : this.name,
                'phone' : this.phone,
                'address' : this.address,
                'city' : this.city,
                'state' : this.state,
                'zip' : this.zip,
                'description' : this.description,
                'serviceHours': this.serviceHours,
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
	}
	this.deleteRs = function(){
		return $.ajax({
            url : "../laa_webapp/api/resource/id/"+sourceID,
            data : {
            	'id' : sourceID
            },
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
	}
}
