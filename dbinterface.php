<?php

require 'dbconnect.php';
verifyUserHasAttemptedLogin();
$username = $_SESSION['username'];
$password = $_SESSION['password'];
$_SESSION['db'] = attemptConnectDatabase($username, $password);

function sqlQuery($string) {
	$db = $_SESSION['db'];
	return $db->query($string);
}

function getCategories() {
	return sqlQuery("SELECT * FROM `category` WHERE parentCategoryID IS NULL");
}
function addCategory($name, $description, $parentCategory_id = 'NULL') {
	sqlQuery("INSERT INTO `laadb`.`category` (`ID`, `parentCategoryID`, `name`, `description`) VALUES (NULL, ".$parentCategory_id.", '".$name."', '".$description."');");
}
function updateCategory($category_id, $field_name, $new_value) {
	sqlQuery("UPDATE `laadb`.`category` SET `".$field_name."` = '".$new_value."' WHERE `category`.`ID` = ".$category_id.";");
}
function getCategory($category_id) {
	return sqlQuery("SELECT * FROM `resource` WHERE categoryID=".$category_id.";");
}
function addResource($category_id, $name, $phone = '', $email = '', $address = '', $city = '', $state = '', $description = '') {
	sqlQuery("INSERT INTO `laadb`.`resource` (`ID`, `categoryID`, `name`, `phone`, `email`, `address`, `city`, `state`, `description`) VALUES (NULL, '".$category_id."', '".$name."', '".$phone."', '".$email."', '".$address."', '".$city."', '".$state."', '".$description."');");
}
function updateResource($resource_id, $field_name, $new_value) {
	sqlQuery("UPDATE `laadb`.`resource` SET `".$field_name."` = '".$new_value."' WHERE `resource`.`ID` = ".$resource_id.";");
}

?>