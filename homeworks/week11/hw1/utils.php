<?php
  require_once('conn.php');

  function getUserFromUsername($username) {
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM k1325699_users WHERE username = ?");
    $stmt->bind_param('s',$username);
    $result = $stmt->execute();
    if (!$result) {
      die($conn->error);
    }
    $result = $stmt->get_result();
    $row =$result->fetch_assoc();
    return $row;
  }

  function escape($str) {
    return htmlspecialchars($str,ENT_QUOTES);
  }
?>
