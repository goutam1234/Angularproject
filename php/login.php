<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$pwd = mysqli_real_escape_string($mysqli, trim($request->password));
// $email = mysqli_real_escape_string($mysqli, trim($request->username));
$phone = mysqli_real_escape_string($mysqli, trim($request->mobile));
$sql = "SELECT * FROM newo_users where phone='$phone' and password='$pwd'";
// echo $sql;die;
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>