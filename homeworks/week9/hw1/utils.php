<?php
  require_once('conn.php');

  function getUserFromUsername($username) {
    global $conn;

    $sql = sprintf(
      "SELECT * FROM k1325699_users WHERE username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    if (!$result) {
      die($conn->error);
    }
    $row =$result->fetch_assoc();
    return $row;
  }
?>
