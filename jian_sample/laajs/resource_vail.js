$(document).ready(function() {
    $('#resource_form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	name:{
        		validators :{
        			notEmpty: {
	                    message: 'The username is required and cannot be empty'
	                },
	                regexp: {
	                    regexp: /^[a-z A-Z 0-9_]+$/,
	                    message: 'The username can only consist of alphabetical, number and underscore'
	                }
        		}
        	},
        	city:{
        		validators :{
	                regexp: {
	                    regexp: /^[a-z A-Z-\.']+$/,
	                    message: 'The username can only consist of alphabetical, number and underscore'
	                }
        		}
        	},
            website: {
                validators: {
                    uri: {
                        message: 'The website address is not valid'
                    }
                }
            },
            zip: {
                validators: {
                    regexp: {
                        regexp: /^\d{5}$/,
                        message: 'The US zipcode must contain 5 digits'
                    }
                }
            },
            fees : {
            	validators :{
            		numeric : {
            			message: 'fees can only be numeric'
            		}
            	}
            },
            phone : {
            	validators :{
            		phone :{
            			country: 'US',
            			message :'The value is not valid %s phone number'
            		}
            	}
            }
        }
    });
});