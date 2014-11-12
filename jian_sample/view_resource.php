<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>View Resource</title>
		<script type="text/javascript"></script>
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
					<li class="list-group-item" id = "name">
						Name
					</li>
					<li class="list-group-item" id="phone">
						Phone
					</li>
					<li class="list-group-item" id="address">
						Address
					</li>
					<li class="list-group-item" id="city">
						City
					</li>
					<li class="list-group-item" id="state">
						State
					</li>
					<li class="list-group-item" id="zip">
						Zip
					</li>
					<li class="list-group-item" id="description">
						Description
					</li>
					<li class="list-group-item" id="serviceHours">
						ServiceHours
					</li>
					<li class="list-group-item" id="eligibility">
						Eligibility
					</li>
					<li class="list-group-item" id="intakeProcedure">
						IntakeProcedure
					</li>
					<li class="list-group-item" id="documents">
						Documents
					</li>
					<li class="list-group-item" id="fees">
						Fees
					</li>
					<li class="list-group-item" id="languages">
						Languages
					</li>
					<li class="list-group-item" id="services">
						Services
					</li>
					<li class="list-group-item" id="website">
						Website
					</li>
				</ul>
			</div>

			<div class="row">
				<div class=" col-xs-6">
					<button id ="edit" type="button" style="background-color:lightgreen" class="btn btn-block btn-custom btn-lg" onclick="edit()">
						Edit
					</button>
				</div>
				<div class=" col-xs-6">
					<button id = "delete" type="button" style="background-color:red" class="btn btn-block btn-custom btn-lg" onclick="del()">
						Delete
					</button>
				</div>
			</div>
			
			<hr>
			
			<div class="form-wrap">
				<h4>Contacts</h4>
				<hr>
				<button type="button" class="btn btn-block btn-success" data-toggle="modal" data-target="#add_contact_modal">
					Add Contact
				</button>
				<hr>
				<div id="searchinputDiv" class="form-group">
					<input id="searchinput" class="form-control" type="search" placeholder="Search..." />
				</div>
				<div id="contactList" class="list-group"></div>

				<input type="hidden" id="chosenContactID" />

				<div id="add_contact_modal" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title">Add Contact</h4>
							</div>
							<div class="modal-body">
								<div class="form-wrap">
									<h5 id = "m1" style="color: red;"></h5>
									<form id="addContactForm" class="form-horizontal" onsubmit="event.preventDefault();">
										<div class="form-group">
											<div class="col-sm-10">
												<label for="add_name" class="control-label required">Name:</label>
												<input type="text" name="add_name" id="add_name" class="form-control" placeholder="required" required>
											</div>

											<div class="col-sm-10">
												<label for="add_email" class="control-label required">Email:</label>
												<input type="email" name="add_email" id="add_email" class="form-control">
											</div>

											<div class="col-sm-10">
												<label for="add_phone" class="control-label required">Phone:</label>
												<input type="tel" name="add_phone" id="add_phone" class="form-control">
											</div>

											<div class="col-sm-10">
												<label for="description" class="control-label">Description:</label>
												<textarea name="add_description" id="add_description" class="form-control">
													</textarea>
											</div>

										</div>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">
									Close
								</button>
								<button type="button" class="btn btn-primary" onclick="createContact();">
									Create
								</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->

				<div id="show_contact_modal" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title">View Contact</h4>
							</div>
							<div class="modal-body">
								<div class="form-wrap">
									<form id="showContactForm" class="form-horizontal" onsubmit="event.preventDefault();">
										<div class="form-group">
											<div class="col-sm-10">
												<label for="show_name" class="control-label required">Name:</label>
												<p name="show_name" id="show_name"></p>
											</div>

											<div class="col-sm-10">
												<label for="show_email" class="control-label">Email:</label>
												<p name="show_email" id="show_email"></p>
											</div>

											<div class="col-sm-10">
												<label for="show_phone" class="control-label">Phone:</label>
												<p name="show_phone" id="show_phone"></p>
											</div>

											<div class="col-sm-10">
												<label for="show_description" class="control-label">Description:</label>
												<p name="show_description" id="show_description"></p>
											</div>

										</div>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">
									Close
								</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->

				<div id="edit_contact_modal" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title">Edit Contact</h4>
							</div>
							<div class="modal-body">
								<div class="form-wrap">
									<h5 id = "m2" style="color: red;"></h5>
									<form id="editContactForm" class="form-horizontal" onsubmit="event.preventDefault();">
										<div class="form-group">
											<div class="col-sm-10">
												<label for="edit_name" class="control-label required">Name:</label>
												<input type="text" name="edit_name" id="edit_name" class="form-control" placeholder="required" required>
											</div>

											<div class="col-sm-10">
												<label for="edit_email" class="control-label required">Email:</label>
												<input type="email" name="edit_email" id="edit_email" class="form-control">
											</div>

											<div class="col-sm-10">
												<label for="edit_phone" class="control-label required">Phone:</label>
												<input type="tel" name="edit_phone" id="edit_phone" class="form-control">
											</div>

											<div class="col-sm-10">
												<label for="edit_description" class="control-label">Description:</label>
												<textarea name="edit_description" id="edit_description" class="form-control">
													</textarea>
											</div>

										</div>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">
									Close
								</button>
								<button type="button" class="btn btn-primary" onclick="editContact();">
									Save changes
								</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->

				<div id="remove_contact_modal" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title">Remove Contact</h4>
							</div>
							<div class="modal-body">
								<div class="form-wrap">
									<h4 id="removeContactName"></h4>
									<p>
										Are you sure that you want to remove this contact?
									</p>

								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">
									Cancel
								</button>
								<button type="button" class="btn btn-danger" onclick="deleteContact();">
									Remove
								</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->

			</div>

		</div>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		<script src="laajs/bootstrap-list-filter.min.js"></script>
		<script>var resourceID = <?php echo $_GET['id'] ?>;</script>
		<script src="laajs/apihost.js"></script>
		<script src="laajs/resource.js"></script>
		<script src="laajs/resource_func.js"></script>
		<script src="laajs/contact.js"></script>
		<script src="laajs/contact_funcs.js"></script>
	</body>
</html>