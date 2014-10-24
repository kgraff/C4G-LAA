<?php
session_start();
function addCategory(&$categories, $name, $description) {
	$id = $_SESSION['id'];
	$_SESSION['id'] = $id + 1;
	$categories[$id] = array();
	$categories[$id]['id'] = 0;
	$categories[$id]['name'] = $name;
	$categories[$id]['description'] = $description;
}

function addResource(&$category, $name, $phone, $description) {
	$id = $category['id'];
	$category['id'] = $id + 1;
	$category[$id] = array();
	$category[$id]['id'] = 0;
	$category[$id]['name'] = $name;
	$category[$id]['phone'] = $phone;
	$category[$id]['description'] = $description;
}

function addContact(&$resource, $name, $phone, $description) {
	$id = $resource['id'];
	$resource['id'] = $id + 1;
	$resource[$id] = array();
	$resource[$id]['id'] = 0;
	$resource[$id]['name'] = $name;
	$resource[$id]['phone'] = $phone;
	$resource[$id]['description'] = $description;
}

?>