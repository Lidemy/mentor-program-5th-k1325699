<?php
  require_once('conn.php');

  if(empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])){
    header('Location:register.php?errCode=1');
    die('資料不齊全');
  }
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = sprintf(
    "INSERT INTO k1325699_users(nickname,username,password) value('%s','%s','%s')",
    $nickname,
    $username,
    $password
  );
  $result = $conn->query($sql);
  if( $conn->errno === 1062){
    header('Location:register.php?errCode=2');
    die('帳號已被註冊');
  }
  if(!$result){
    die($conn->error);
  }
  echo "成功";
  header('Location:register.php')
?>