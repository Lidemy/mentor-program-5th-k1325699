<?php
  session_start();
  require_once('conn.php');

  if(empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])){
    header('Location:register.php?errCode=1');
    die('資料不齊全');
  }
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
  $role = 1;
  $stmt = $conn->prepare("INSERT INTO k1325699_users(nickname,username,password,role) value(?,?,?,?)");
  $stmt->bind_param('sssi',$nickname,$username,$password,$role);
  $result = $stmt->execute();
  if( $conn->errno === 1062){
    header('Location:register.php?errCode=2');
    die('帳號已被註冊');
  }
  if(!$result){
    die($conn->error);
  }
  $_SESSION['username'] = $username;
  header('Location:index.php');
?>