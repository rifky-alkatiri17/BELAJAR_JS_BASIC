<?php  
$conn = mysqli_connect('localhost','root', '', 'db_bkppd');
$select = mysqli_query($conn, 'SELECT * FROM tb_pdi');
$rows = [];
while($row = mysqli_fetch_assoc($select)){
	$rows[] = $row;	
}
// echo"<pre>";
echo json_encode($rows)  ;
// echo "</pre>";
?>