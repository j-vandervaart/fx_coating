<?php

	$msg = '';
	
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['phone']);
	$email = htmlspecialchars($_POST['email']);
	$size = htmlspecialchars($_POST['size']);
	$location = htmlspecialchars($_POST['location']);
	$overview = htmlspecialchars($_POST['overview']);

	if(!empty($name) && !empty($phone) && !empty($email) && !empty($size) && !empty($location) && !empty($overview)) {

		if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
			$msg = "Please use a valid email";
			echo $msg;
		}else {
			$toEmail = 'rick@fxcoating.ca';
			$subject = 'Project Quote for '.$name;
			$body = '<h4>Name:</h4><p>'.$name.'</p>
			<h4>Email Address:</h4><p>'.$email.'</p>
			<h4>Phone Number:</h4><p>'.$phone.'</p>
			<h4>Facility Size:</h4><p>'.$size.'</p>
			<h4>Location:</h4><p>'.$location.'</p>
			<h4>Project Overview:</h4><p>'.$overview.'</p>
			';

			$headers = "MIME-Version: 1.0" ."\r\n";
			$headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";
			$headers .= "From: ".$name."<".$email.">". "\r\n";

			if(mail($toEmail, $subject, $body, $headers)){
				$msg = 'Your email has been sent';
				echo $msg;
			}else {
				$msg = "Your email was not sent";
				echo $msg;
			}
		}

	}else {
		$msg = "Please fill in all fields";
		echo $msg;
	}

?>