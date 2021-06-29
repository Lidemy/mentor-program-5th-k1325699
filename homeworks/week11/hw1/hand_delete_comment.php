<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  $user = getUserFromUsername($username);
  $id = $_GET['id'];
  $username = $_SESSION['username'];
  $is_deleted = 1;
  $stmt = $conn->prepare('SELECT * from k1325699_comments WHERE id = ?');
  $stmt->bind_param('i',$id);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if($user['role']===2 || $username = $row['username']){
    $stmt = $conn->prepare("UPDATE k1325699_comments SET is_deleted = ? WHERE id = ? and username = ?");
    $stmt->bind_param('iis',$is_deleted,$id, $username);
    $result = $stmt->execute();
    if(!$result){
      die($conn->error);
    }
  }
  header('Location:index.php')
?>