<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  $nickname =null;
  if(!empty($_SESSION['username'])){
    $row = getUserFromUsername($_SESSION['username']);
    $nickname = $row['nickname'];
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言版</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <?php if (!empty($_SESSION['username'])) {
    ?>
    <a href="logout.php" class="board-btn">登出</a>
    <?php 
    }else{ ?>
    <a href="register.php" class="board-btn">註冊</a>
    <a href="login.php" class="board-btn">登入</a>
    <?php }?>
    <h2>hi, <?php 
    echo $nickname;?></h2>
    <h1 class="board__title">Comment</h1>
    <?php
      if(!empty($_GET['errCode'])){
        if ($_GET['errCode'] === '1'){
          echo '<h2 class="error">資料不齊全</h2>';
        }
      }
    ?>
    <form action="hand_add_comment.php" method="post" class="board__new-comment">
      <textarea name="content" id="" cols="" rows="5"></textarea>
      <?php if (empty($_SESSION['username'])) {
        echo '<h3> 請登入再留言</h3>';
      }else{
      ?>
      <input type="submit" value="提交" class="board__submit-btn">
      <?php }?>
    </form>
    <hr>
    <?php 
      $sql = "SELECT * FROM k1325699_comments order by id DESC";
      $result = $conn->query($sql);
      if(!$result) {
        die($conn->error);
      }
      while ($row = $result->fetch_assoc()) {?>
    <div class="card">
      <div class="card__avatar"></div>
      <div class="card__body">
        <div class="card__info">
          <span class="card__info__author"><?php echo $row['nickname'];?></span>
          <span class="card__info__time"><?php echo $row['created_at'];?></span>
        </div>
        <div class="card__comment"><?php echo $row['content'];?></div>
      </div>
    </div>
    <?php }?>
  </main>

</body>
</html>