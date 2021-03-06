<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Edit/Remove a Category</title>

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
	<body>
	<script src="laajs/gotomain.js"></script>
		<section id="login">
			<div class="container">
				<div class="form-wrap">
					<hr>
					<button type="button" class="btn btn-block btn-success" onclick="gotoMain(<?php echo $_GET['id'] ?>)">Go to Main</button>
					<hr>
					<h1>View/Edit/Remove a Category</h1>
					<br>
					<div class="form-group">
				        <input id="searchinput" class="form-control" type="search" placeholder="Search..." />
				    </div>
					<div id="editCategoryList" class="list-group">
					</div>

					<input type="hidden" id="chosenCategoryID" />

					<div id="show_category_modal" class="modal fade">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
									</button>
									<h4 class="modal-title">View Category</h4>
								</div>
								<div class="modal-body">
									<div class="form-wrap">
										<h5 id = "m2" style="color: red;"></h5>
										<form id="showCategoryForm" class="form-horizontal" onsubmit="event.preventDefault();">
											<div class="form-group">
												<div class="col-sm-10">
													<label for="show_category" class="control-label">Parent Category:</label>
													<p name="show_category" id="show_category"></p>
												</div>

												<div class="col-sm-10">
													<label for="show_name" class="control-label required">Name:</label>
													<p name="show_name" id="show_name"></p>
												</div>

												<div class="col-sm-10">
													<label for="show_description" class="control-label">Description:</label>
													<p name="show_description" id="show_description">
													</p>
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

					<div id="edit_category_modal" class="modal fade">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
									</button>
									<h4 class="modal-title">Edit Category</h4>
								</div>
								<div class="modal-body">
									<div class="form-wrap">
										<h5 id = "m1" style="color: red;"></h5>
										<form id="editCategoryForm" class="form-horizontal" onsubmit="event.preventDefault();editCategory();">
											<div class="form-group">
												<div class="col-sm-10">
													<label for="category" class="control-label">Parent Category:</label>
													<input type="text" name="category" id="category" class="form-control" list="categoryList">
													<datalist id="categoryList"></datalist>
												</div>

												<div class="col-sm-10">
													<label for="name" class="control-label required">Name:</label>
													<input type="text" name="name" id="name" class="form-control" placeholder="required" required>
												</div>

												<div class="col-sm-10">
													<label for="description" class="control-label">Description:</label>
													<textarea name="description" id="description" class="form-control">
													</textarea>
												</div>
												
												<input type="submit" id="submitEditCategory" style="display: none;" value="" >

											</div>
										</form>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">
										Close
									</button>
									<button type="button" class="btn btn-primary" onclick="$('#submitEditCategory').click();">
										Save changes
									</button>
								</div>
							</div><!-- /.modal-content -->
						</div><!-- /.modal-dialog -->
					</div><!-- /.modal -->
					
					<div id="remove_category_modal" class="modal fade">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
									</button>
									<h4 class="modal-title">Remove Category</h4>
								</div>
								<div class="modal-body">
									<div class="form-wrap">
										<h4 id="removeCategoryName"></h4>
										<p>Are you sure that you want to remove this category?</p>
										
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">
										Cancel
									</button>
									<button type="button" class="btn btn-danger" onclick="deleteCategory();">
										Remove
									</button>
								</div>
							</div><!-- /.modal-content -->
						</div><!-- /.modal-dialog -->
					</div><!-- /.modal -->
					
				</div>
			</div>
			<!-- /.container -->
		</section>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		<script src="laajs/bootstrap-list-filter.min.js"></script>
		<script src="laajs/apihost.js"></script>
		<script src="laajs/category.js"></script>
		<script src="laajs/category_funcs.js"></script>
		<script type="text/javascript">var loginID = <?php echo($_GET['id']) ?></script>
	</body>
</html>