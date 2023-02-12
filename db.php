<?php
$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'member');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);



/* 
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "member";
 
//Define your database username here.
$HostUser = "root";
 
//Define your database password here.
$HostPass = "";
 */
?>