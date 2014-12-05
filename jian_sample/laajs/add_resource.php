<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add a Community Resource</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrapvalidator/dist/css/bootstrapValidator.min.css"/>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  </head>
  <body>
  <script src="laajs/gotomain.js"></script>
    <section id="login">
    <div class="container">
        <div class="form-wrap">
        <hr>
            <button type="button" class="btn btn-block btn-success" onclick="gotoMain(<?php echo $_GET['id'] ?>)">Go to Main</button>
        <hr>
            <h1>Add a Community Resource</h1>
            <br>
            <form  id="resource_form" class="form-horizontal">
                <div class="form-group">
                    <label for="category" class="col-sm-2 control-label">Category:</label>
                    <div class="col-sm-10">
                        <input type="text" name="category" id="category" class="form-control" list="categoryList" placeholder="required">
                        <datalist id="categoryList">
                        </datalist>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="col-sm-2 control-label">Name:</label>
                    <div class="col-sm-10">
                        <input type="name" name="name" id="name" class="form-control" placeholder="required">
                    </div>
                </div>
                <div class="form-group">   
                    <label for="phone" class="col-sm-2 control-label">Phone:</label>
                    <div class="col-sm-10">
                        <input type="phone" name="phone" id="phone" class="form-control">
                    </div>
                    
                </div>
                <div class="form-group">
                    <label for="address" class="col-sm-2 control-label">Address:</label>
                    <div class="col-sm-10">
                        <input type="address" name="address" id="address" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="city" class="col-sm-2 control-label">City:</label>
                    <div class="col-sm-10">
                        <input type="city" name="city" id="city" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="state" class="col-sm-2 control-label">State:</label>
                    <div class="col-sm-10">
                        <select id ="state" class="form-control">
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="District Of Columbia">District Of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia" selected="selected" >Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                    </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="zip" class="col-sm-2 control-label">Zip:</label>
                    <div class="col-sm-10">
                        <input type="zip" name="zip" id="zip" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="description" class="col-sm-2 control-label">Description:</label>
                    <div class="col-sm-10">
                        <input type="description" name="description" id="description" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="serviceHours" class="col-sm-2 control-label">Service Hours:</label>
                    <div class="col-sm-10">
                        <input type="serviceHours" name="serviceHours" id="serviceHours" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                     <label for="eligibility" class="col-sm-2 control-label">Eligibility:</label>
                    <div class="col-sm-10">
                        <input type="eligibility" name="eligibility" id="eligibility" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                     <label for="intakeProcedure" class="col-sm-2 control-label">Intake Procedure:</label>
                    <div class="col-sm-10">
                        <input type="intakeProcedure" name="intakeProcedure" id="intakeProcedure" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="documents" class="col-sm-2 control-label">Documents:</label>
                    <div class="col-sm-10">
                        <input type="documents" name="documents" id="documents" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="fees" class="col-sm-2 control-label">Fees:</label>
                    <div class="col-sm-10">
                        <input type="fees" name="fees" id="fees" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="languages" class="col-sm-2 control-label">Bilingual:</label>
                    <div class="col-sm-10">
                        <select name="languages" id="languages" class="form-control">
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>                      
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="services" class="col-sm-2 control-label">Services:</label>
                    <div class="col-sm-10">
                        <input type="services" name="services" id="services" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="website" class="col-sm-2 control-label">Website:</label>
                    <div class="col-sm-10">
                        <input type="website" name="website" id="website" class="form-control" value="http://">
                    </div>
                 </div>
                </div>
                <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Add Resource" onclick="event.preventDefault();createResource(<?php echo $_GET['id'] ?>);">
            </form>
        </div>
    </div> <!-- /.container -->
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="laajs/bootstrap-list-filter.min.js"></script>
    <script src="laajs/apihost.js"></script>
    <script src="laajs/resource.js"></script>
    <script src="laajs/resource_func.js"></script>
    <script src="laajs/resource_vail.js"></script>
    <script type="text/javascript" src="bootstrapvalidator/dist/js/bootstrapValidator.min.js"></script>
    <script src="laajs/category.js"></script>
    <script src="laajs/category_funcs.js"></script>
  </body>
</html>