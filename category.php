<?php

require 'dbinterface.php';
$categories = $_SESSION['categories']; //To be removed after demo
$category = $categories[$_REQUEST['category']];
if (array_key_exists('name', $_REQUEST) && array_key_exists('phone', $_REQUEST)) {
	addResource($category, $_REQUEST['name'], $_REQUEST['phone'], 0);
	$_SESSION['categories'] = $categories;
}

$id = $category['id'];
for ($i = 0; $i<$id; $i++) {
	echo '<p>'.$category[$i]['name'].'</p>';
	echo '<p>'.$category[$i]['phone'].'</p>';
	echo '<br />';
}

echo '<form action ="" method = "post">'
		.'<p>Name : <input type ="text" name = "name" size="20" maxlength="40"></p>'
		.'<p>Phone : <input type ="text" name = "phone" size="40" maxlength="60"></p>'
				.'<p><input type="submit" name="submit" value = "Enviar"></p>'
						.'<p><input type="hidden" name="category" value = '.$_REQUEST['category'].'></p>'
						.'</form>';
?>