<?php
  session_start();
  require_once('conn.php');

  if(empty($_POST['username']) || empty($_POST['password'])){
    header('Location:login.php?errCode=1');
    die('資料不齊全');
  }
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = sprintf(
    "SELECT * FROM k1325699_users where username ='%s' and password = '%s'",
    $username,
    $password
  );
  $result = $conn->query($sql);
  if ($result->num_rows){
    $_SESSION['username'] = $username;
    header('Location:index.php');
  }else{
    header('Location:login.php?errCode=2');
  }
  if(!$result){
    die($conn->error);
  }
?>