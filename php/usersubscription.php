<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
echo "5555555555555555555555";die;
if(isset($postdata) && !empty($postdata))
{
   // echo "5555555555555555555555";die;
// $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
// // $email = mysqli_real_escape_string($mysqli, trim($request->username));
// $phone = mysqli_real_escape_string($mysqli, trim($request->mobile));
$netwood_phone = mysqli_real_escape_string($mysqli, trim($request->netwood_phone));
$games_phone = mysqli_real_escape_string($mysqli, trim($request->games_phone));
$starhunt_phone = mysqli_real_escape_string($mysqli, trim($request->starhunt_phone));
// echo $netwood_phone."-".$games_phone."-".$starhunt_phone."-----";die;
 $sql = "SELECT * FROM newo_users where phone='$netwood_phone' ";
 echo $sql;die;
// if($result = mysqli_query($mysqli,$sql))
// {
// $rows = array();
// while($row = mysqli_fetch_assoc($result))
// {
// $rows[] = $row;
// }
// echo json_encode($rows);
// }
// else
// {
// http_response_code(404);
// }
}
?>