<?php
session_start();
$username = $_SESSION['username'];
if (!$username) {
	header('Location: login.php');
}
if (! (mysql_connect('localhost','root',''))) {
	die(mysql_error());
}
if (! (mysql_select_db('users'))) {
	die(mysql_error());
}
$result = mysql_query('SELECT * FROM users WHERE username="'.$username.'"');
/* Still need to test for injection attacks! */

$row = mysql_fetch_array($result);
$user = $row['username'];
if($username != $user) {
	die("<br />Invalid username.<br /> ");
}
if (! ($row['isAdmin'])) {
	header('Location: login.php');
}
if (array_key_exists('delete', $_REQUEST)) {
	$delete = $_REQUEST['delete'];
	mysql_query('DELETE FROM users WHERE username="'.$delete.'"');
}
if (array_key_exists('addUser', $_REQUEST)) {
	$addUser = $_REQUEST['addUser'];
	$addPwd = password_hash($_REQUEST['addPwd'], PASSWORD_BCRYPT);
	mysql_query('INSERT INTO users (username, password, isAdmin) VALUES ("'.$addUser.'", "'.$addPwd.'", 0)');
	/* Again, need check for injection. Also, need to be able to add other admins */
}
echo '<html>'
	.'<title>'
		.'User Account Management'
	.'</title>'
	.'<body>'
		.'<h1>Add User</h1>'
		.'<form action ="" method = "post">'
			.'<p>User Name : <input type ="text" name = "addUser" size="20" maxlength="40"></p>'
			.'<p>Password : <input type ="text" name = "addPwd" size="40" maxlength="60"></p>'
			.'<p><input type="submit" name="submit" value = "Submit"></p>'
		.'</form>'
	.'</body>'
.'</html>';
?>