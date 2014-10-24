<?php
require 'dbinterface.php';
$username = $_SESSION['username'];
if (!$username) {
	header('Location: login.php');
}
echo $username.'<br />';
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
if (! (mysql_select_db('laadb'))) {
	die(mysql_error());
}

$categories = $_SESSION['categories']; //To be removed after demo
$id = $_SESSION['id']; //To be removed after demo

echo '<html>'
		.'<title>'
			.'Hello'
		.'</title>'
		.'<body>';




echo 'Elige una categoría';

echo '<form action ="category.php" method = "post">';
		for ($i = 0; $i<$id; $i++) {
			echo '<p><button name="category" value='.$i.' type="submit">'.$categories[$i]['name'].'</button></p>';
		}

if ($row['isAdmin']) {
		echo '<form action ="userAccounts.php" method = "post">'
				.'<p><input type="submit" name="userAccounts" value = "User Account Management"></p>'
			.'</form>'
		.'</body>'
	.'</html>';
}
?>