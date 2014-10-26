<?php

require 'dbconnect.php';
session_start();

if (array_key_exists('username', $_REQUEST) && array_key_exists('password', $_REQUEST)) {
	
	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
	
	attemptConnectDatabase($username, $password);
	
	$_SESSION['username'] = $username;
	$_SESSION['password'] = $password;
	header('Location: index.php');
	
}

?>


<html>
<title> 'Hello' </title>'
<body>

<form action="" method="post">
	<p>Nombre de usuario / Username : <input type="text" name="username" size="20" maxlength="40"></p>
	<p>Password : <input type="text" name="password" size="40" maxlength="60"></p>
	<p><input type="submit" name="submit" value="Enviar"></p>
</form>

</body>
</html>