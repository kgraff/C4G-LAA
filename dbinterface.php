<?php

require 'dbconnect.php';
verifyUserHasAttemptedLogin();
$username = $_SESSION['username'];
$password = $_SESSION['password'];
$_SESSION['db'] = attemptConnectDatabase($username, $password);

function sqlQuery($string) {
	$db = $_SESSION['db'];
	$result = $db->query($string);
	$last_id = $db->insert_id;
	if ($last_id != 0) {
		return $last_id;
	} else {
		return $result;
	}
}

function getCategories() {
	return sqlQuery("SELECT * FROM `category` WHERE parentCategoryID IS NULL;");
}
function addCategory($name, $description, $parentCategory_id = 'NULL') {
	return sqlQuery("INSERT INTO `laadb`.`category` (`ID`, `parentCategoryID`, `name`, `description`) VALUES (NULL, ".$parentCategory_id.", '".$name."', '".$description."');");
}
function updateCategory($category_id, $field_name, $new_value) {
	return sqlQuery("UPDATE `laadb`.`category` SET `".$field_name."` = '".$new_value."' WHERE `category`.`ID` = ".$category_id.";");
}
function getCategoryAttribute($category_id, $field_name) {
	$result = sqlQuery("SELECT `".$field_name."` FROM `category` WHERE ID = ".$category_id.";");
	$field = $result->fetch_assoc();
	return $field[$field_name];
}
function getResources($category_id) {
	return sqlQuery("SELECT * FROM `resource` WHERE categoryID=".$category_id.";");
}
function addResource($category_id, $name, $phone = '', $email = '', $address = '', $city = '', $state = '', $description = '') {
	return sqlQuery("INSERT INTO `laadb`.`resource` (`ID`, `categoryID`, `name`, `phone`, `email`, `address`, `city`, `state`, `description`) VALUES (NULL, '".$category_id."', '".$name."', '".$phone."', '".$email."', '".$address."', '".$city."', '".$state."', '".$description."');");
}
function updateResource($resource_id, $field_name, $new_value) {
	return sqlQuery("UPDATE `laadb`.`resource` SET `".$field_name."` = '".$new_value."' WHERE `resource`.`ID` = ".$resource_id.";");
}
function deleteResource($resource_id) {
	return sqlQuery("DELETE FROM `laadb`.`resource` WHERE `resource`.`ID` = ".$resource_id.";");
}

?>