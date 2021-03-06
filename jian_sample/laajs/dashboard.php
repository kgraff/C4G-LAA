<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LAA Community Resource Manager</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="style.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body onload="dashboardOnLoad(<?php echo($_GET['id']) ?>)">

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript">var loginID = <?php echo($_GET['id']) ?></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="ps.js"></script>
    <section id="login">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <div class="form-wrap">
                  <h1>Welcome to the LAA Community Resource Manager!</h1>
                      <a href="find_resource.php?id=<?php echo($_GET['id']) ?>" class="forget">Find a Community Resource</a>
                      <a href="add_resource.php?id=<?php echo($_GET['id']) ?>"  class="forget">Add a Community Resource</a>
                      <a href="add_category.php?id=<?php echo($_GET['id']) ?>" class="forget">Add a Category</a>
                      <a href="edit_category.php?id=<?php echo($_GET['id']) ?>"  class="forget">View/Edit/Remove a Category</a>
                      <hr>
                  </div>
              </div> <!-- /.col-xs-12 -->
          </div> <!-- /.row -->
      </div> <!-- /.container -->
  </section>
  </body>
</html>