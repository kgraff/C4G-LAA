<?php

require 'dbinterface.php';

$fields = array('phone', 'email', 'address', 'city', 'state', 'description');
$user_fields = array('Name', 'Phone number', 'Email address', 'Address', 'City', 'State', 'Description');
$numUser_fields = 7;

$category_id = $_REQUEST['category'];

if (array_key_exists('name', $_REQUEST)) {
	$last_id = addResource($category_id, $_REQUEST['name']);
	foreach ($fields as $field_name) {
		if (array_key_exists($field_name, $_REQUEST)) {
			updateResource($last_id, $field_name, $_REQUEST[$field_name]);
		}
	}
}

if (array_key_exists('delete', $_REQUEST)) {
	$resource_id = $_REQUEST['delete'];
	deleteResource($resource_id);
}

echo '<html>';
echo '<title>Community Resources for Category: '.getCategoryAttribute($category_id, 'name').'</title>';
echo '<body>';
echo '<h1>Community Resources for Category: <br />'.getCategoryAttribute($category_id, 'name').'</h1><br />';
$resources = getResources($category_id);
echo '<form action="" method="post">';
echo '<table><tr>';
foreach ($user_fields as $user_field_name) {
	echo '<td><h3>'.$user_field_name.'</h3></td>';
}
echo '</tr>';
while ($resource = $resources->fetch_assoc()) {
	echo '<tr>';
	echo '<td>'.$resource['name'].'</td>';
	foreach ($fields as $field_name) {
		echo '<td>';
		if (array_key_exists($field_name, $resource)) {
			echo '<p>'.$resource[$field_name].'</p>';
		}
		echo '</td>';
	}
	echo '<td>';
	echo '<button name="delete" value='.$resource['ID'].' type="submit">Delete</button>';
	echo '<input type="hidden" name="category" value='.$_REQUEST['category'].'>';
	echo '</td></tr>';
}
echo '</table></form>';

echo '<form action="" method="post">';
echo '<table>';
echo '<tr><td>Name: </td><td><input type ="text" name = "name" size="40" maxlength="60"></td></tr>';
for ($i = 1; $i < $numUser_fields; $i++) {
	echo '<tr><td>'.$user_fields[$i].': </td><td><input type ="text" name = "'.$fields[$i-1].'" size="40" maxlength="60"></td></tr>';
}
echo '<tr><td><input type="hidden" name="category" value='.$_REQUEST['category'].'></td>';
echo '<td><input type="submit" name="submit" value="Enviar"></td></tr></table></form>';

echo '<form action="index.php" method="post">'
		.'<p><input type="submit" name="submit" value="Back"></p>'
	.'</form>';
?>