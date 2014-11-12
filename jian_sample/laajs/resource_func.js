
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
var websitvar;
function begin (sid) {
	//document.getElementById("name").innerHTML="<input type=\"text\" value = \""+id +"\">";
	sourceID = sid;
	if (sid ="") {
		window.open("dashboard.html","_self");
		return;	
	}
	var res = new Resource(resourceID,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
	var promise = res.read();
	var msg = null;
    promise.success(function(data) {
        console.log("attempt: " + data)
        msg = data;
    });
    if (msg != null) {
    	categoryID= msg['categoryID'];
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
		websitvar = msg['website'];
        document.getElementById("name").innerHTML="<b> Name : </b>" + name;
        document.getElementById("phone").innerHTML="<b> Phone : </b>" + phone;
        document.getElementById("address").innerHTML="<b> Address : </b>" + address;
        document.getElementById("city").innerHTML="<b> City : </b>" + city;
        document.getElementById("state").innerHTML="<b> State : </b>" + state;
        document.getElementById("zip").innerHTML="<b> Zip : </b>" + zip;
        document.getElementById("description").innerHTML="<b> Description : </b>" + description;
        document.getElementById("serviceHours").innerHTML="<b> ServiceHours : </b>" + serviceHours;
        document.getElementById("eligibility").innerHTML="<b> Eligibility : </b>" + eligibility;
        document.getElementById("intakeProcedure").innerHTML="<b> IntakeProcedure : </b>" + intakeProcedure;
        document.getElementById("documents").innerHTML="<b> Documents: </b>" + documents;
        document.getElementById("fees").innerHTML="<b> Fees : </b>" + fees;
        document.getElementById("languages").innerHTML="<b> Languages : </b>" + languages;
        document.getElementById("services").innerHTML="<b> Services : </b>" + services;
        document.getElementById("website").innerHTML="<b> Website : </b>" + websitvar;

        

    } else {
        document.getElementById("name").innerHTML="Your email or password is invalid";
    }
	
}
function edit () {
    var func = document.getElementById("edit").innerHTML;
    console.log(func);
    if (func == "Submit") {
        document.getElementById("edit").innerHTML="Loading";
        func = document.getElementById("edit").innerHTML;
        var res = new Resourse();
        var promise = res.updateRs();
        var msg = null;
        promise.success(function(data) {
        console.log("attempt: " + data)
        msg = data;
        });
        if (msg != null) {
            window.open("view_resource.php?id="+sourceID,"_self");
        } else {
            // save for later
        }
    }
    if (func != "Loading") {
        document.getElementById("edit").innerHTML = "Submit";
        document.getElementById("name").innerHTML="<b> Name : </b> <input id =\"name1\" type=\"text\" value = \""+name +"\">";
        document.getElementById("phone").innerHTML="<b> Phone : </b> <input id =\"phone1\" type=\"text\" value = \""+phone +"\">";
        document.getElementById("address").innerHTML="<b> Address : </b> <input id =\"address1\" type=\"text\" value = \""+address +"\">";
        document.getElementById("city").innerHTML="<b> City : </b> <input id =\"city1\" type=\"text\" value = \""+city +"\">";
        document.getElementById("state").innerHTML="<b> State : </b> <input id =\"state1\" type=\"text\" value = \""+state +"\">" ;
        document.getElementById("zip").innerHTML="<b> Zip : </b> <input id =\"zip1\" type=\"text\" value = \""+zip +"\">";
        document.getElementById("description").innerHTML="<b> Description : </b> <input id =\"description1\" type=\"text\" value = \""+description +"\">";
        document.getElementById("serviceHours").innerHTML="<b> ServiceHours : </b> <input id =\"serviceHours1\" type=\"text\" value = \""+serviceHours +"\">";
        document.getElementById("eligibility").innerHTML="<b> Eligibility : </b> <input id =\"eligibility1\" type=\"text\" value = \""+eligibility +"\">";
        document.getElementById("intakeProcedure").innerHTML="<b> IntakeProcedure : </b> <input id =\"intakeProcedure1\" type=\"text\" value = \""+intakeProcedure +"\">" ;
        document.getElementById("documents").innerHTML="<b> Documents: </b> <input id =\"documents1\" type=\"text\" value = \""+documents +"\">";
        document.getElementById("fees").innerHTML="<b> Fees : </b> <input id =\"fees1\" type=\"text\" value = \""+fees +"\">";
        document.getElementById("languages").innerHTML="<b> Languages : </b> <input id =\"languages1\" type=\"text\" value = \""+languages +"\">";
        document.getElementById("services").innerHTML="<b> Services : </b> <input id =\"services1\" type=\"text\" value = \""+services +"\">";
        document.getElementById("website").innerHTML="<b> Website : </b> <input id =\"website1\" type=\"text\" value = \""+websitvar +"\">";
    }
    
}
function del () {
    var res = new Resourse();
    var promise = res.deleteRs();
    var msg = null;
    promise.success(function(data) {
    console.log("attempt: " + data)
    msg = data;
    });
    if (msg != null) {
        window.open("dashboard.html","_self");
    } else {
        // save for later
    }
}