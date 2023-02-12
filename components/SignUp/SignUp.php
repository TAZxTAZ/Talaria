<?php
include('db.php');

$last_name = $decodedData['last_name'];
$first_name = $decodedData['first_name'];
$birth = $decodedData['birth'];
$nick_name = $decodedData['nick_name'];
$email = $decodedData['email'];
$password = $decodedData['password'];//password is hashed

$SQL = "SELECT * FROM member WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO member(last_name, first_name, birth, nick_name, email, password) VALUES('$email', '$last_name', '$first_name', '$birth', '$password', '$nick_name')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Complete--!";
    } else {
        $Message = "Error";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);
/*
// Importing DBConfig.php file.
include 'dbconfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$name = $obj['name'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM member WHERE email='$email'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into member (name,email,password) values ('$name','$email','$password')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);*/