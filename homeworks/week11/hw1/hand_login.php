<?php
  session_start();
  require_once('conn.php');

  if(empty($_POST['username']) || empty($_POST['password'])){
    header('Location:login.php?errCode=1');
    die('資料不齊全');
  }
  $username = $_POST['username'];
  $password = $_POST['password'];
  $stmt = $conn->prepare("SELECT * FROM k1325699_users where username =?");
  $stmt ->bind_param('s',$username);
  $result = $stmt->execute();
  $result = $stmt-> get_result();
  $row = $result->fetch_assoc();
  if (password_verify($password,$row['password'])){
    $_SESSION['username'] = $username;
    header('Location:index.php');
  }else{
    header('Location:login.php?errCode=2');
  }
  if(!$result){
    die($conn->error);
  }
?>