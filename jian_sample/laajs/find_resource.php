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
	<script type="text/javascript">var loginID = <?php echo $_GET['id'] ?>;</script>
		<section id="login">
			<div class="container">
				<div class="form-wrap">
				<hr>
					<button type="button" class="btn btn-block btn-success" onclick="gotoMain(<?php echo $_GET['id'] ?>)">Go to Main</button>
					<hr>
					<h1>Find a Community Resource</h1>
					<br>
					
					<button type="button" class="btn btn-danger" onclick="location.reload();">
						Reset
					</button>
					<br>
					
					<div id="categoriesDiv">
						<h4>Categories</h4>
						<p id="chosenMainCategoryName"></p>
						<div id="mainCategoriesListDiv">
							<div class="form-group">
						        <input id="mainSearchInput" class="form-control" type="search" placeholder="Search categories..." />
						    </div>
							<div id="chooseMainCategoryList" class="list-group">
							</div>
						</div>
					</div>
					
					<div id="subCategoriesDiv" style="display: none;">
						<hr>
						<h4>Sub Categories</h4>
						<div class="form-group">
					        <input id="subSearchInput" class="form-control" type="search" placeholder="Search subcategories..." />
					    </div>
						<div id="chooseSubCategoryList" class="list-group">
						</div>
					</div>
					
					<div id="resourcesDiv" style="display: none;">
						<hr>
						<h4>Community Resources</h4>
						<div class="form-group">
					        <input id="resourceSearchInput" class="form-control" type="search" placeholder="Search community resources..." />
					    </div>
						<div id="chooseResourceList" class="list-group">
						</div>
					</div>

					<input type="hidden" id="chosenCategoryID" />
					
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
		<script src="laajs/resource.js"></script>
		<script src="laajs/category.js"></script>
		<script src="laajs/find_resource.js"></script>
	</body>
</html>