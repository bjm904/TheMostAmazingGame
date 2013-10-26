<h1>Saving / Loading </h1>
<!--
IF EXISTS(SELECT * FROM saves WHERE name='$_POST[name]')<br>

----------------

IF EXISTS(SELECT * FROM saves WHERE name='test')
BEGIN
    UPDATE saves SET entity='changed' WHERE name='test'
END
ELSE
BEGIN
    INSERT INTO saves (`name`, `ID`, `entity`)
	VALUES ('test', NULL, 'new')
END

-----------------

IF (SELECT COUNT(*) FROM saves
WHERE name='test') > 0
BEGIN
    UPDATE saves SET entity='changed' WHERE name='test'
END
ELSE
BEGIN
    INSERT INTO saves (`name`, `ID`, `entity`)
	VALUES ('test', NULL, 'new')
END
-->
<?php
$con=mysqli_connect("localhost","root","Bjm9042481875","game");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
if($_POST['action']=="save"){
mysqli_query($con,"
INSERT INTO saves (`name`, `entity`) VALUES ('$_POST[name]', '$_POST[saveEntity]')
ON DUPLICATE KEY UPDATE entity='$_POST[saveEntity]'");
echo "Saved as '";
echo $_POST['name'];
echo "'";
}
elseif ($_POST['action']=="load"){
$result = mysqli_query($con,"SELECT * FROM saves
WHERE name='$_POST[name]'");
echo "Loading '";
echo $_POST['name'];
echo "'<br>";
echo "Copy the following. Back at the game click 'Load Manually' and paste there.<br><hr>";
while($row = mysqli_fetch_array($result))
  {
  echo $row['entity'];
  echo "<hr>";
  }
  echo "<br><hr>";
}
elseif ($_POST['action']=="delete"){
mysqli_query($con,"DELETE FROM saves
WHERE name='$_POST[name]'");
echo $_POST['name'];
echo " deleted.";
}
elseif ($_POST['action']=="list"){
$result = mysqli_query($con,"SELECT * FROM saves");
while($row = mysqli_fetch_array($result))
  {
  echo $row['name'] . " --- " . $row['entity'];
  echo "<hr>";
  }
}
else{
echo "You have reached this page in error. Please return and try again.";
}

mysqli_close($con);

?>