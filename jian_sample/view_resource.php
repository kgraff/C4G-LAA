<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
	<script type="text/javascript">
	</script>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="style.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body onload="begin(<?php echo $_GET['id'] ?>)">
	<div class="container">
		<div class="row">
			<ul class="list-group">
				<li class="list-group-item" id = "name">Name</li> 
				<li class="list-group-item" id="phone">Phone</li>
				<li class="list-group-item" id="address">Address</li>
				<li class="list-group-item" id="city">City </li>
				<li class="list-group-item" id="state">State</li>
				<li class="list-group-item" id="zip">Zip</li>
				<li class="list-group-item" id="description">Description</li>
				<li class="list-group-item" id="serviceHours">ServiceHours</li>
				<li class="list-group-item" id="eligibility">Eligibility</li>
				<li class="list-group-item" id="intakeProcedure">IntakeProcedure</li>
				<li class="list-group-item" id="documents">Documents</li>
				<li class="list-group-item" id="fees">Fees</li>
				<li class="list-group-item" id="languages">Languages</li>
				<li class="list-group-item" id="services">Services</li>
				<li class="list-group-item" id="website">Website</li>
			</ul>
		</div>
		<div class="row">
			<div class=" col-xs-6">
				<button id ="edit" type="button" style="background-color:lightgreen" class="btn btn-block btn-custom btn-lg" onclick="edit()">  Edit    </button>
			</div>
			<div class=" col-xs-6">
				<button id = "delete" type="button" style="background-color:red" class="btn btn-block btn-custom btn-lg" onclick="del()">   Delete   </button>
			</div>
		</div>
	</div>

	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="laajs/resource.js"></script>
  </body>
</html>