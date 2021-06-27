<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if(empty($_POST['content'])){
    header('Location:index.php?errCode=1');
    die('資料不齊全');
  }
  $row = getUserFromUsername($_SESSION['username']);
  $username = $row['username'];
  if($row['role']===0){
    header('Location:index.php?errCode=3');
    die('您已遭停權');
  }
  $content = $_POST['content'];
  $stmt = $conn->prepare("INSERT INTO k1325699_comments(username,content) value(?,?)");
  $stmt->bind_param('ss',$username,$content);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }
  header('Location:index.php')
?>