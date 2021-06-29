<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  $username = $_POST['username'];
  $user = getUserFromUsername($username);
  $role = intval($_POST['role']);

  if($_POST['role'] == $user['role']){
    header('Location:admin.php?errCode=1');
    die('沒有更改');
  }
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  if($user['role'] == 2 ){
    $stmt = $conn->prepare("UPDATE k1325699_users SET role = ? WHERE username = ?");
    $stmt->bind_param('is',$role,$_POST['username']);
    $result = $stmt->execute();
    if(!$result){
      die($conn->error);
    }
  }
  header('Location:admin.php')
?>