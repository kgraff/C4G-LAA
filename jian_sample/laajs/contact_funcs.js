var contactByID = {};
var contactIdByName = {};
var resourceID = 3; // EDIT THIS!!!!!!!!!!!!!!!!!!!!!!11

$(document).ready(function() {
	populateContactList();
	//console.log(contactIdByName);
	//console.log(contactByID);
});

function populateContactList() {
	// Retrieve all contacts
	var contact = new Contact(null, null, null, null);
	var promise = contact.readAll();
	promise.success(function(data) {
			console.log("attempt: " + data);
			// iterate through each contact returned and add it to the contact list and
			// populate the object containing the list of contacts and their IDs
			$.each(data, function(key, value) {
				console.log(data[key]);
				contactByID[data[key].ID] = {"resourceID": data[key].resourceID, "name": data[key].name, "email": data[key].email, "phone": data[key].phone, "description": data[key].description};
				contactIdByName[data[key].name] = data[key].ID; // Add the contact name and ID pair
				
				// Append to autocomplete contact list datalist on add page and edit modal
				if($('#contactList') != undefined){
					$('#contactList').append('<option value="' + data[key].name + '">');
				}
				
				// Append to list of contacts on edit page
				if($('#contactList') != undefined){
					$('#contactList').append('<a class="list-group-item" contactID="' + data[key].ID + '">' +
					'<button type="button" class="btn btn-default btn-xs pull-right" style="margin-left: 10px;" data-toggle="modal" data-target="#remove_contact_modal" onclick="populateRemoveContactModal(this);"><span class="glyphicon glyphicon-remove"></span></button>' +
					'<button type="button" class="btn btn-default btn-xs pull-right" style="margin-left: 10px;" data-toggle="modal" data-target="#edit_contact_modal" onclick="populateEditContactModal(this);"><span class="glyphicon glyphicon-pencil"></span>' +
					'<button type="button" class="btn btn-default btn-xs pull-right" data-toggle="modal" data-target="#show_contact_modal" onclick="populateShowContactModal(this);"><span class="glyphicon glyphicon-folder-open"></span></button>' +
					'</button>' + data[key].name + '</a>');
				}
			});
			if($('#contactList') != undefined){
				$('#contactList').btsListFilter('#searchinput');
			}
	});
	
	promise.error(function(jqXHR, textStatus, errorThrown) {
			console.log("Status: " + textStatus);
			console.log("Error: " + errorThrown);
			alert("Error pre-populating contacts.");
	});
}

function populateShowContactModal(showButton){
	// The anchor containing the button element contains the contactID
	// Therefore, the parentNode must be retrieved
	var contactID = showButton.parentNode.getAttribute("contactID");
	var chosenContact = contactByID[contactID];
	if(chosenContact != undefined){
		console.log("success");
		// Populate fields
		console.log(chosenContact);
		if(contactByID[chosenContact.parentContactID] != undefined)
		{
			$('#show_contact').text(contactByID[chosenContact.parentContactID].name);
		}
		$('#show_name').text(chosenContact.name);
		$('#show_email').text(chosenContact.email);
		$('#show_phone').text(chosenContact.phone);
		$('#show_description').text(chosenContact.description);
		
		// Populate hidden contact id input
		$('#chosenContactID').val(contactID);
	}
	else{
		console.log("error showing the chosen contact");
		// close the modal or do something
		alert("error showing the chosen contact");
		// close the modal
		setTimeout( "$('#show_contact_modal').modal('hide');", 100 );
	}
}

function populateEditContactModal(editButton){
	// The anchor containing the button element contains the contactID
	// Therefore, the parentNode must be retrieved
	var contactID = editButton.parentNode.getAttribute("contactID");
	var chosenContact = contactByID[contactID];
	if(chosenContact != undefined){
		console.log("success");
		// Populate fields
		$('#name').val(chosenContact.name);
		$('#email').val(chosenContact.email);
		$('#phone').val(chosenContact.phone);
		$('#description').val(chosenContact.description);
		
		// Populate hidden contact id input
		$('#chosenContactID').val(contactID);
	}
	else{
		console.log("error editing the chosen contact");
		// close the modal or do something
		alert("error editing the chosen contact");
		// close the modal
		setTimeout( "$('#edit_contact_modal').modal('hide');", 100 );
	}
}

function populateRemoveContactModal(removeButton){
	// The anchor containing the button element contains the contactID
	// Therefore, the parentNode must be retrieved
	var contactID = removeButton.parentNode.getAttribute("contactID");
	var chosenContact = contactByID[contactID];
	if(chosenContact != undefined){
		console.log("success");
		
		$('#removeContactName').text(chosenContact.name);
		
		// Populate hidden contact id input
		$('#chosenContactID').val(contactID);
	}
	else{
		console.log("error removing the chosen contact");
		// close the modal or do something
		alert("error removing the chosen contact");
		// close the modal
		setTimeout( "$('#remove_contact_modal').modal('hide');", 100 );
	}
}

function createContact() {
	// validate the user input used to create a contact
	var valid = validateContact();
	if (valid == true) {
		var parentContact = $('#contact').val();
		var parentContactID = contactIdByName[parentContact];
		var name = $('#name').val();
		var description = $('#description').val();

		var contact = new Contact(null, parentContactID, name, description);
		var promise = contact.create();
		var msg = null;

		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		}); 

		if (msg != null) {
			//notify success (or failure to insert) and redirect to dashboard
			if(msg.return_code == 0){
				alert(msg.message);
				window.open("dashboard.html", "_self");
			}
			else{
				alert("Failed to create contact. Please try again later.");
			}
		} else {
			//notify failure and prompt to try again later.
			alert("Failed to create contact. Please try again later.");
		}
	}
	else{
		$('#m1').text("error: " + valid); //Display the error to the user
	}
}

function editContact() {
	// validate the user input used to create a contact
	var valid = validateContact();
	if (valid == true) {
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var description = $('#description').val();
		// Get the chosen contact ID from hidden input
		var ID = $('#chosenContactID').val();

		var contact = new Contact(ID, resourceID, name, email, phone, description);
		var promise = contact.update();
		var msg = null;

		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		}); 

		if (msg != null) {
			//notify success (or failure to update) and redirect to edit/remove contact page
			if(msg.return_code == 0){
				alert(msg.message);
				window.open("contact.html", "_self");
			}
			else{
				alert("Failed to update contact. Please try again later.");
			}
		} else {
			//notify failure and prompt to try again later.
			alert("Failed to update contact. Please try again later.");
		}
	}
	else{
		alert(valid);
		$('#m2').text("error: " + valid); //Display the error to the user
	}
}

function deleteContact() {
	// Get the chosen contact ID from hidden input
	var ID = $('#chosenContactID').val();

	var contact = new Contact(ID, null, null, null);
	var promise = contact.delete();
	var msg = null;

	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	}); 

	if (msg != null) {
		//notify success (or failure to delete) and redirect to edit/remove contact page
		if(msg.return_code == 0){
			alert(msg.message);
			window.open("contact.html", "_self");
		}
		else{
			alert("Failed to delete contact. Please try again later.");
		}
	} else {
		//notify failure and prompt to try again later.
		alert("Failed to delete contact. Please try again later.");
	}
}

function validateContact() {
	
	// Ensure the name is not empty
	var contactName = $('#name').val();
	if(contactName == null || contactName == ""){
		return (false, "contact name is empty");
	}
	
	return true;
}