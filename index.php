<?php
session_start();
$username = $_SESSION['username'];
if (!$username) {
	header('Location: login.php');
}
echo $username;
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
if ($row['isAdmin']) {
	echo '<html>'
		.'<title>'
			.'Hello'
		.'</title>'
		.'<body>'
			.'<form action ="userAccounts.php" method = "post">'
				.'<p><input type="submit" name="userAccounts" value = "User Account Management"></p>'
			.'</form>'
		.'</body>'
	.'</html>';
}
?>