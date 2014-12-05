var contactByID = {};
var contactIdByName = {};

$(document).ready(function() {
	populateContactList();
	//console.log(contactIdByName);
	//console.log(contactByID);
});

function populateContactList() {
	// Retrieve all contacts
	var contact = new Contact(null, resourceID, null, null, null, null);
	var promise = contact.readAllByResource(resourceID);
	promise.success(function(data) {
			console.log("attempt: " + data);
			// iterate through each contact returned and add it to the contact list and
			// populate the object containing the list of contacts and their IDs
			var numContacts = 0;
			$.each(data, function(key, value) {
				console.log(data[key]);
				contactByID[data[key].ID] = {"resourceID": data[key].resourceID, "name": data[key].name, "email": data[key].email, "phone": data[key].phone, "description": data[key].description};
				contactIdByName[data[key].name] = data[key].ID; // Add the contact name and ID pair
				
				// Append to list of contacts on edit page
				if($('#contactList') != undefined){
					$('#contactList').append('<a class="list-group-item" contactID="' + data[key].ID + '">' +
					'<button type="button" class="btn btn-default btn-xs pull-right" style="margin-left: 10px;" data-toggle="modal" data-target="#remove_contact_modal" onclick="populateRemoveContactModal(this);"><span class="glyphicon glyphicon-remove"></span></button>' +
					'<button type="button" class="btn btn-default btn-xs pull-right" style="margin-left: 10px;" data-toggle="modal" data-target="#edit_contact_modal" onclick="populateEditContactModal(this);"><span class="glyphicon glyphicon-pencil"></span>' +
					'<button type="button" class="btn btn-default btn-xs pull-right" data-toggle="modal" data-target="#show_contact_modal" onclick="populateShowContactModal(this);"><span class="glyphicon glyphicon-folder-open"></span></button>' +
					'</button>' + data[key].name + '</a>');
					numContacts = numContacts + 1;
				}
			});
			if($('#contactList') != undefined && numContacts > 0){
				$('#contactList').btsListFilter('#searchinput');
			}
			console.log(numContacts);
			console.log($('#searchinput'));
			if(numContacts < 1){
				console.log("here");
				$('#searchinputDiv').hide();
			}
			
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
		$('#edit_name').val(chosenContact.name);
		$('#edit_email').val(chosenContact.email);
		$('#edit_phone').val(chosenContact.phone);
		$('#edit_description').val(chosenContact.description);
		
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
	var valid = validateContact(0);
	if (valid == true) {
		var name = $('#add_name').val();
		var email = $('#add_email').val();
		var phone = $('#add_phone').val();
		var description = $('#add_description').val();

		var contact = new Contact(null, resourceID, name, email, phone, description);
		var promise = contact.create();
		var msg = null;

		promise.success(function(data) {
			console.log("attempt: " + data);
			msg = data;
		}); 

		if (msg != null) {
			//notify success (or failure to update) and redirect to edit/remove contact page
			if(msg.return_code == 0){
				alert(msg.message);
				window.open("view_resource.php?sid=" + resourceID+"&id="+loginID, "_self");
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
	var valid = validateContact(1);
	if (valid == true) {
		var name = $('#edit_name').val();
		var email = $('#edit_email').val();
		var phone = $('#edit_phone').val();
		var description = $('#edit_description').val();
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
				window.open("view_resource.php?sid=" + resourceID+"&id="+loginID, "_self");
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
			window.open("view_resource.php?sid=" + resourceID+"&id="+loginID, "_self");
		}
		else{
			alert("Failed to delete contact. Please try again later.");
		}
	} else {
		//notify failure and prompt to try again later.
		alert("Failed to delete contact. Please try again later.");
	}
}

function validateContact(mode) {
	// mode = 0 for create or 1 for edit
	
	// Ensure the name is not empty
	if(mode == 0){
		var contactName = $('#add_name').val();
		if(contactName == null || contactName == ""){
			return (false, "contact name is empty");
		}
	}
	
	if(mode == 1){
		var contactName = $('#edit_name').val();
		if(contactName == null || contactName == ""){
			return (false, "contact name is empty");
		}
	}
	
	return true;
}