<?php  
    $myemail = 'email@jamesmurphy.dev';
    $name = $_POST['name']; 
    $email_address = $_POST['email']; 
    $message = $_POST['message']; 
    $email_subject = $_POST['subject'];
    $to = $myemail;
    $email_body = "You have received a new message from ". $name . "\nEmail: $email_address\nSubject: $email_subject \nMessage \n $message";
    $headers = "From: $myemail\n" . "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: .");
?>