function showPassword() {
    
    var key_attr = $('#key').attr('type');
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
}

function logIn() {
	var email = document.getElementById('email').value;
	var key =document.getElementById('key').value;
    if (email=="") {
        document.getElementById("same").innerHTML="Please enter your email";
        return;
    }
    if (key=="") {
         document.getElementById("same").innerHTML="Please enter your password";
        return;
    } 
    var user = new User(null,null,email,key,null);
    var promise = user.login();
    var msg = null;
    promise.success(function(data) {
        console.log("attempt: " + data)
        msg = data;
    });
    if (msg != null) {
        window.open("dashboard.html","_self");// jump to catalog
    } else {
        document.getElementById("same").innerHTML="Your email or password is invalid";
    }
}
function createUser () {
    var email = document.getElementById('email').value;
    var key =document.getElementById('key').value;
    var key2 = document.getElementById('key2').value;
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    var isAdmin = document.getElementById('inputD').value;
    
    if (fname=="") {
        document.getElementById("same").innerHTML="Please enter your first name";
        return;
    }
    if (lname=="") {
        document.getElementById("same").innerHTML="Please enter your last name";
        return;
    }
    if (email=="") {
        document.getElementById("same").innerHTML="Please enter your email";
        return;
    }
    if (key=="") {
         document.getElementById("same").innerHTML="Please enter your password";
        return;
    }
    if (key != key2) {
        document.getElementById("same").innerHTML="Your password doesn't match";
        return;
    }

    var user = new User(fname,lname,email,key,isAdmin);
    var promise = user.check();
    var msg = null;
    promise.success(function(data) {
        console.log("attempt: " + data)
        msg = data;
    });
    if (msg != null) {
        document.getElementById("same").innerHTML="The email has already been in the database";
    } else {
        promise = user.create();
        msg = null;
        promise.success(function(data) {
            console.log("attempt: " + data)
            msg = data;
        });
        if (msg == "Successfully inserted user!") {
            document.getElementById("same").innerHTML="Account create successful";
            window.open("dashboard.html","_self");// jump to catalog
        } else {
            document.getElementById("same").innerHTML="Failed to create a new user.";
        }
    }
    /**/
}

function User(fname,lname,email,password,isAdmin) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;

    this.create = function() {
        return $.ajax({
            url: "../laa_webapp/api/user",
            data: {
                'firstName' : this.fname,
                'lastName'  : this.lname,
                'email'     : this.email,
                'password'  : this.password,
                'isAdmin'   : this.isAdmin
            },
            context : document.body,
            async : false,
            type : 'POST',
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
    this.check = function(){
        return $.ajax({
            url: "../laa_webapp/api/userByEmail",
            data : {
                'email' : this.email
            },
            context : document.body,
            async : false,
            type : 'POST',
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
    this.login = function () {
        return $.ajax({
            url: "../laa_webapp/api/userByPassword",
            data : {
                'email'    : this.email,
                'password' : this.password
            },
            context : document.body,
            async : false,
            type : 'POST',
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
}