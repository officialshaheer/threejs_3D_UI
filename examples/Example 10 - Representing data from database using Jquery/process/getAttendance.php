 <?php 
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "votoco";

    $conn = new mysqli($servername, $username, $password, $dbname);

	$sql = "select * from users";
	$result = mysqli_query($conn, $sql);
	$output = array();

	foreach ($result as $value) {
		// echo $value['u_id'];
		// echo "<br><table width='90%' style='border-spacing: 3px;color:white;border-bottom: 2px solid #ddd;'><tr align='center'><td class='uid'>".$value['u_id']."</td><td>";
//          echo $value['status'];
//          echo "</td></tr></table>";       
	 $output[] = $value;

    }
 	echo json_encode($output);
 	die();
?>
