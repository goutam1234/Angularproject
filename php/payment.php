<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
//echo $postdata;die;
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
// $name = mysqli_real_escape_string($mysqli, trim($request->name));
// $phone = mysqli_real_escape_string($mysqli, trim($request->phone));
// $email = mysqli_real_escape_string($mysqli, trim($request->email));
// $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$type = mysqli_real_escape_string($mysqli, trim($request->type));
$user_phone = mysqli_real_escape_string($mysqli, trim($request->userphone));
//  echo $user_phone;die;
//  $sql="call subscription_proc('1','test','123456',1)";
$sql_fetch="SELECT  id,name, phone, email, password, status, created_ts, updated_ts FROM newostreet_db.newo_users WHERE phone='".$user_phone."'";
// echo $sql_fetch;die;
//$result = mysqli_query($mysqli, $sql_fetch);
// $result=$mysqli->query($sql_fetch);
// $row = $result -> fetch_row($result);
//     $name=$row['name'];
//     echo $name;die;
if ($result = $mysqli -> query($sql_fetch)) {
    $row = $result -> fetch_row();
    // echo $row[0].$row[1];die;
    $userid=$row[0];
    $username=$row[2];
    $password=$row[4];
    
    
    $result -> free_result();
  }
  $today=date('Y-m-d');
  
  $oneYearOn = date('Y-m-d',strtotime(date("Y-m-d") . " + 365 day"));
//   echo $oneYearOn;die;


if($type==1){
$sql = "INSERT INTO ott_subscription(newo_user_id,ott_username,ott_password,ott_subscriptin_date,ott_subscription_status,created_ts) VALUES ('".$userid."','".$username."','".$password."','".$today."',1,now())";
$sql1="INSERT INTO user_subscription(newo_user_id, subscription_package, ott_subscription, subscriptin_start_date, subscriptin_end_date, subscription_status, created_ts) Values('".$userid."',1,'".$password."','".$today."','".$oneYearOn."',1,now())";
}
elseif($type==2){
    $sql = "INSERT INTO starhunt_subscription(newo_user_id, starhunt_username, starhunt_password, starhunt_subscriptin_date, starhunt_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$password."','".$today."',1,now())"; 
    $sql1="INSERT INTO user_subscription(newo_user_id, subscription_package, starhunt_subscription, subscriptin_start_date, subscriptin_end_date, subscription_status, created_ts) Values('".$userid."',1,'".$password."','".$today."','".$oneYearOn."',1,now())";
}
elseif($type==3){
    $sql_3 = "INSERT INTO ott_subscription(newo_user_id,ott_username,ott_password,ott_subscriptin_date,ott_subscription_status,created_ts) VALUES ('".$userid."','".$username."','".$password."','".$today."',1,now())";
    $sql_starhunt = "INSERT INTO starhunt_subscription(newo_user_id, starhunt_username, starhunt_password, starhunt_subscriptin_date, starhunt_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$password."','".$today."',1,now())"; 
    $sql_game = "INSERT INTO game_subscription(newo_user_id, game_username, game_password, game_subscriptin_date, game_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$password."','".$today."',1,now())";
    $sql_1="INSERT INTO user_subscription(newo_user_id, subscription_package, ott_subscription,game_subscription,starhunt_subscription, subscriptin_start_date, subscriptin_end_date, subscription_status, created_ts) Values('".$userid."',2,1,1,1,'".$today."','".$oneYearOn."',1,now())";

    

    //$sql_4 = "SELECT * FROM newo_users where phone='$phone' and password='$pwd'";

    if ($mysqli->query($sql_3) === TRUE && $mysqli->query($sql_starhunt) === TRUE && $mysqli->query($sql_game) === TRUE && $mysqli->query($sql_1) === TRUE) {
        //   $last_id = $mysqli->insert_id;
        //   $sql_4 = "SELECT phone FROM newo_users where phone='$phone' and password='$pwd'";

        $authdata_all=[
            'status'=>'success',
            'id'=>1,
            'username'=>$username
            // 'last_id'=>$last_id
        ];
        //print_r($authdata_all); die;
        echo json_encode($authdata_all);
    }
    die();

}
//  echo $sql;die;
if (($mysqli->query($sql) === TRUE) && $mysqli->query($sql1) === TRUE) {
// $authdata = [
// 'name' => $name,
// 'phone' => $phone,
// 'pwd' => '',
// 'email' => $email,
// 'Id' => mysqli_insert_id($mysqli)
// ];

$authdata=[
    'status'=>'success',
    'id'=>0
];
echo json_encode($authdata);
}
}

?>