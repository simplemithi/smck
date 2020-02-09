<?php
/**
 * Created by PhpStorm.
 * User: SimpleMithi
 * Date: 2017-06-17
 * Time: 2:14 PM
 */

$to = "somebody@example.com, somebodyelse@example.com";
// $to = "smckconstructionltd@yahoo.com";
$fromEmail = trim($_POST['email']);
$name = trim($_POST['name']);
$msg = trim($_POST['msg']);
$subject = trim($_POST['subject']);

$errMsg = [];

if ($fromEmail == "") {
    $errMsg['email'] = "Please enter your email address";
}
if ($name == "") {
    $errMsg['name'] = "Please enter your name";
}
if ($msg == "") {
    $errMsg['msg'] = "Please enter your message";
}

if (!empty($errMsg)) {
    return $errMsg;
}

$message = "
<html>
    <head>
    <title>SMCK Contact E-Mail by {$name}</title>
</head>
<body>
    <p>Name: {$name}</p>
    <p>Subject: {$subject}</p>
    <p>msg: {$msg}</p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: <{$fromEmail}>" . "\r\n";
/*$headers .= 'Cc: myboss@example.com' . "\r\n";*/

session_start();
$_SESSION['email'] = "sent";

mail($to,$subject,$message,$headers);
// header('Location: contact-us');