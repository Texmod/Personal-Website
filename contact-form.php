<?php
	$username = '4453422_contact';
	$password = 'gta5gamer1';
	$hostname = 'fdb1032.awardspace.net';
	$database = '4453422_contact';


	$name = $_POST['name'];
	$phoneno = $_POST['phoneno'];
	$email = $_POST['email'];
	$website = $_POST['website'];

	$namemsg = '';
	$phonemsg = '';
	$emailmsg = '';
	$websitemsg = '';

	if($name==''){
		$namemsg.= "Name cannot be blank";
	}
	if($phoneno==''){
		$phonemsg.= "Phone no cannot be blank";
	}
	if($email==''){
		$emailmsg.= "Email cannot be blank";
	}
	if($name==''){
		$websitemsg.= "Website cannot be blank";
	}

	if($name && $phoneno && $email && $name){
		$connect = mysqli_connect(username: $username,
							  	  password: $password,
							  	  hostname: $hostname,
							  	  database: $database
							 	 );

		if($connect){
			$sql = "INSERT INTO tbl_user(name,phoneno,email,website) VALUES ('$name','$phoneno','$email','$website')";
			$query = $connect->query($sql);
 
			echo "Successfully Entered";
		}
	}
?>