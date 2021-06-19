<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if(empty($_POST['content'])){
    header('Location:index.php?errCode=1');
    die('資料不齊全');
  }
  $row = getUserFromUsername($_SESSION['username']);
  $nickname = $row['nickname'];
  $content = $_POST['content'];
  $sql = sprintf(
    "INSERT INTO k1325699_comments(nickname,content) value('%s','%s')",
    $nickname,
    $content
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }
  echo "成功";
  header('Location:index.php')
?>