<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if(empty($_POST['content'])){
    header('Location:update_comment.php?errCode=1');
    die('資料不齊全');
  }
  $user = getUserFromUsername($username);
  $id = $_POST['id'];
  $content = $_POST['content'];
  $username = $_SESSION['username'];
  $stmt = $conn->prepare('SELECT * from k1325699_comments WHERE id = ?');
  $stmt->bind_param('i',$id);
  $result = $stmt->execute();
  if(!$result) {
  die($conn->error);
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if($user['role']===2 || $username = $row['username']){
    $stmt = $conn->prepare("UPDATE k1325699_comments SET content = ? WHERE id = ?");
    $stmt->bind_param('si',$content,$id);
    $result = $stmt->execute();
    if(!$result){
      die($conn->error);
    }
  }
  header('Location:index.php')
?>