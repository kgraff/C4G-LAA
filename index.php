<?php
require 'dbinterface.php';
?>

<html>
<title>Hello</title>
<body>

<h1> Welcome, <?php echo $username; ?>! </h1>
<br />
<h2>Elige una categoría</h2>

<form action="category.php" method="post">
<?php
$categories = getCategories();
while ($category = $categories->fetch_assoc()) {
	echo '<p><button name="category" value='.$category['ID'].' type="submit">'.$category['name'].'</button></p>';
}
?>
</form>

</body>
</html>