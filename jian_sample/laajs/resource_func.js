var sourceID;
var categoryID;
var name;
var phone;
var address;
var city;
var state;
var zip;
var description;
var serviceHours;
var eligibility;
var intakeProcedure;
var documents;
var fees;
var languages;
var services;
var website;
function begin(sid) {
	//document.getElementById("name").innerHTML="<input type=\"text\" value = \""+id +"\">";
	sourceID = sid;
	if ( sid = "") {
		window.open("dashboard.html", "_self");
		return;
	}
	var res = new Resource(resourceID, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
	var promise = res.read();
	var msg = null;
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		categoryID = msg['categoryID'];
		name = msg['name'];
		phone = msg['phone'];
		address = msg['address'];
		city = msg['city'];
		state = msg['state'];
		zip = msg['zip'];
		description = msg['description'];
		serviceHours = msg['serviceHours'];
		eligibility = msg['eligibility'];
		intakeProcedure = msg['intakeProcedure'];
		documents = msg['documents'];
		fees = msg['fees'];
		languages = msg['languages'];
		services = msg['services'];
		website = msg['website'];
		document.getElementById("name").innerHTML = "<b> Name : </b>" + name;
		document.getElementById("phone").innerHTML = "<b> Phone : </b>" + phone;
		document.getElementById("address").innerHTML = "<b> Address : </b>" + address;
		document.getElementById("city").innerHTML = "<b> City : </b>" + city;
		document.getElementById("state").innerHTML = "<b> State : </b>" + state;
		document.getElementById("zip").innerHTML = "<b> Zip : </b>" + zip;
		document.getElementById("description").innerHTML = "<b> Description : </b>" + description;
		document.getElementById("serviceHours").innerHTML = "<b> ServiceHours : </b>" + serviceHours;
		document.getElementById("eligibility").innerHTML = "<b> Eligibility : </b>" + eligibility;
		document.getElementById("intakeProcedure").innerHTML = "<b> IntakeProcedure : </b>" + intakeProcedure;
		document.getElementById("documents").innerHTML = "<b> Documents: </b>" + documents;
		document.getElementById("fees").innerHTML = "<b> Fees : </b>" + fees;
		document.getElementById("languages").innerHTML = "<b> Languages : </b>" + languages;
		document.getElementById("services").innerHTML = "<b> Services : </b>" + services;
		document.getElementById("website").innerHTML = "<b> Website : </b>" + website;

	} else {
		document.getElementById("name").innerHTML = "Your email or password is invalid";
	}

}

function edit() {
	var func = document.getElementById("edit").innerHTML;
	console.log(func);
	if (func == "Submit") {
		document.getElementById("edit").innerHTML = "Loading";
		func = document.getElementById("edit").innerHTML;
		
		name = document.getElementById("name1").value;
        phone = document.getElementById("phone1").value;
        address = document.getElementById("address1").value;
        city = document.getElementById("city1").value;
        state = document.getElementById("state").value;
        zip = document.getElementById("zip1").value;
        description = document.getElementById("description1").value;
        serviceHours = document.getElementById("serviceHours1").value;
        eligibility = document.getElementById("eligibility1").value;
        intakeProcedure = document.getElementById("intakeProcedure1").value;
        documents = document.getElementById("documents1").value;
        fees = document.getElementById("fees1").value;
        languages = document.getElementById("languages1").value;
        services = document.getElementById("services1").value;
        website = document.getElementById("website1").value;
		
		var res = new Resource(resourceID, categoryID, name, phone, address, city, state, zip, description, serviceHours, eligibility, intakeProcedure, documents, fees, languages, services, website);
		var promise = res.update();
		var msg = null;
		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		});
		if (msg != null) {
			window.open("view_resource.php?id=" + sourceID, "_self");
		} else {
			// save for later
		}
	}
	if (func != "Loading") {
		document.getElementById("edit").innerHTML = "Submit";
		document.getElementById("name").innerHTML = "<b> Name : </b> <input id =\"name1\" type=\"text\" value = \"" + name + "\">";
		document.getElementById("phone").innerHTML = "<b> Phone : </b> <input id =\"phone1\" type=\"text\" value = \"" + phone + "\">";
		document.getElementById("address").innerHTML = "<b> Address : </b> <input id =\"address1\" type=\"text\" value = \"" + address + "\">";
		document.getElementById("city").innerHTML = "<b> City : </b> <input id =\"city1\" type=\"text\" value = \"" + city + "\">";
		document.getElementById("state").innerHTML = "<b> State : </b> <input id =\"state1\" type=\"text\" value = \"" + state + "\">";
		document.getElementById("zip").innerHTML = "<b> Zip : </b> <input id =\"zip1\" type=\"text\" value = \"" + zip + "\">";
		document.getElementById("description").innerHTML = "<b> Description : </b> <input id =\"description1\" type=\"text\" value = \"" + description + "\">";
		document.getElementById("serviceHours").innerHTML = "<b> ServiceHours : </b> <input id =\"serviceHours1\" type=\"text\" value = \"" + serviceHours + "\">";
		document.getElementById("eligibility").innerHTML = "<b> Eligibility : </b> <input id =\"eligibility1\" type=\"text\" value = \"" + eligibility + "\">";
		document.getElementById("intakeProcedure").innerHTML = "<b> IntakeProcedure : </b> <input id =\"intakeProcedure1\" type=\"text\" value = \"" + intakeProcedure + "\">";
		document.getElementById("documents").innerHTML = "<b> Documents: </b> <input id =\"documents1\" type=\"text\" value = \"" + documents + "\">";
		document.getElementById("fees").innerHTML = "<b> Fees : </b> <input id =\"fees1\" type=\"text\" value = \"" + fees + "\">";
		document.getElementById("languages").innerHTML = "<b> Languages : </b> <input id =\"languages1\" type=\"text\" value = \"" + languages + "\">";
		document.getElementById("services").innerHTML = "<b> Services : </b> <input id =\"services1\" type=\"text\" value = \"" + services + "\">";
		document.getElementById("website").innerHTML = "<b> Website : </b> <input id =\"website1\" type=\"text\" value = \"" + website + "\">";
	}

}
function createResource() {
    var categoryID =document.getElementById('category').value;
    var name =document.getElementById('name').value;
    var phone =document.getElementById('phone').value;
    var address =document.getElementById('address').value;
    var city =document.getElementById('city').value;
    var state =document.getElementById('state').value;
    var description =document.getElementById('description').value;
    var zip =document.getElementById('zip').value;
    var serviceHours =document.getElementById('serviceHours').value;
    var eligibility =document.getElementById('eligibility').value;
    var intakeProcedure =document.getElementById('intakeProcedure').value;
    var fees =document.getElementById('fees').value;
    var languages =document.getElementById('languages').value;
    var services =document.getElementById('services').value;
    var website =document.getElementById('website').value;
    var documents =document.getElementById('documents').value;
    if (categoryID =="") {
        document.getElementById("m1").innerHTML="Please enter categoryID";
        return;
    }
    if (name=="") {
        document.getElementById("m2").innerHTML="Please enter the name";
        return;
    }
    var resource= new Resource(null,categoryID,name,phone,address,city,state,zip,description,eligibility,intakeProcedure,documents,fees,languages,services,website,serviceHours);
    var promise = resource.create();
    var msg = null;

    promise.success(function(data) {
        console.log("attempt: " + data)
        msg = data;
    });
    if (msg != null) {
        window.open("dashboard.html","_self");
    } else {
        document.getElementById("same").innerHTML="The email has already been in the database";
    }
    

}
function del() {
	var res = new Resource(resourceID, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
	var promise = res.delete();
	var msg = null;
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		window.open("dashboard.html", "_self");
	} else {
		// save for later
	}
}