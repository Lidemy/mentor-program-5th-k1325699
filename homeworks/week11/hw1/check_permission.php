<?php
  if(empty($_SESSION['username'])||$row['role']!==2){
    header('Location:index.php');
    exit();
  }
?>