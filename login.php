<?php
session_start();
if (array_key_exists('username', $_REQUEST) && array_key_exists('password', $_REQUEST)) {
	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
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
	$hash = $row['password'];
	/* Fix hash to be SHA-256; this will require changing database column width from 60 to 256 */
	if (! (password_verify($password, $hash))) {
		die("<br />Invalid password.<br /> ");
	}
	$_SESSION['username'] = $username;
	$_SESSION['password'] = $password;
	header('Location: index.php');
} else {
	echo '<html>'
		.'<title>'
			.'Hello'
		.'</title>'
		.'<body>'
			.'<form action ="" method = "post">'
				.'<p>User Name : <input type ="text" name = "username" size="20" maxlength="40"></p>'
				.'<p>Password : <input type ="text" name = "password" size="40" maxlength="60"></p>'
				.'<p><input type="submit" name="submit" value = "Submit"></p>'
			.'</form>'
		.'</body>'
	.'</html>';
}
?>