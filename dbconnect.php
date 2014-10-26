<?php

function verifyUserHasAttemptedLogin() {
	
	session_start();
	$username = $_SESSION['username'];
	$password = $_SESSION['password'];
	
	if (!$username || !$password) {
		header('Location: login.php');
	}
	
}


function attemptConnectDatabase($username, $password) {
	
	$db = new mysqli('localhost', $username, $password, 'laadb');
	
	if ($db->connect_error) {
		die("<br />Invalid username or password.<br /> ");
	}
	
	return $db;
	
}

?>