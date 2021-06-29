<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  $nickname =null;
  $id = $_GET['id'];

  if(!empty($_SESSION['username'])){
    $user = getUserFromUsername($_SESSION['username']);
    $nickname = $user['nickname'];
    $username = $_SESSION['username'];
  }
  $stmt = $conn->prepare('SELECT * from k1325699_comments WHERE id = ?');
  $stmt->bind_param('i',$id);
  $result = $stmt->execute();
  if(!$result) {
  die($conn->error);
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>編輯留言</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <h1 class="board__title">編輯留言</h1>
    <?php
      if(!empty($_GET['errCode'])){
        if ($_GET['errCode'] === '1'){
          echo '<h2 class="error">資料不齊全</h2>';
        }
      }
    ?>
    <form action="hand_update_comment.php" method="post" class="board__new-comment">
      <textarea name="content" id="" cols="" rows="5"><?php echo $row['content']?></textarea>
      <input type="hidden" name="id" value="<?php echo $_GET['id'];?>">
      <input type="submit" value="提交" class="board__submit-btn">
    </form>
  </main>
</body>
</html>