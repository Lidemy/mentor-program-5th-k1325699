<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  $nickname =null;
  $user =null;
  $username = null;
  if(!empty($_SESSION['username'])){
    $user = getUserFromUsername($_SESSION['username']);
    $nickname = $user['nickname'];
    $username = $_SESSION['username'];
  }
  $page = 1;
  if (!empty($_GET['page'])){
    $page = intval($_GET['page']);
  }
  $item_for_page = 10;
  $offset = ($page - 1) * $item_for_page;

  $stmt = $conn->prepare('SELECT '.
  'C.id as id, C.username as username, U.nickname as nickname, '.
  'C.content as content, C.created_at as created_at '.
  'FROM k1325699_comments as C left join k1325699_users as U '.
  'on C.username = U.username '.
  'WHERE is_deleted IS NULL '.
  'order by C.id DESC '.
  'limit ? offset ?'
  );
  $stmt->bind_param('ii',$item_for_page,$offset);
  $result = $stmt->execute();
if(!$result) {
  die($conn->error);
}
$result = $stmt->get_result();
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
    <a href="#" class="board-btn update-nickname">編輯暱稱</a>
    <?php if ($user['role']===2) {?>
    <a href="admin.php" class="board-btn">權限管理</a>
    <?php
    } 
    }else{ ?>
    <a href="register.php" class="board-btn">註冊</a>
    <a href="login.php" class="board-btn">登入</a>
    <?php }?>
    <h2>hi, <?php 
    echo escape($nickname);?></h2>
    <form action="hand_update_nickname.php" method="post" class="update-nickname-form hidden">
      <div class="board__nickname">
        新的暱稱: <input type="text" name="nickname" id="">
      </div>
      <input type="submit" value="更改" class="board__submit-btn">
    </form>
    <h1 class="board__title">Comment</h1>
    <?php
      if(!empty($_GET['errCode'])){
        if ($_GET['errCode'] === '1'){
          echo '<h2 class="error">資料不齊全</h2>';
        }
        if ($_GET['errCode'] === '3'){
          echo '<h2 class="error">您已遭停權</h2>';
        }
      }
    ?>
    <form action="hand_add_comment.php" method="post" class="board__new-comment">
      <textarea name="content" id="" cols="" rows="5"></textarea>
      <?php 
        if (empty($_SESSION['username'])) {
          echo '<h3> 請登入再留言</h3>';
        }else{
          if ($user['role'] == 0){
            echo '<h3> 您已遭停權</h3>';
          }else{
      ?>
      <input type="submit" value="提交" class="board__submit-btn">
      <?php 
          }
      }
    ?>
    </form>
    <hr>
    <?php 
      while ($row = $result->fetch_assoc()) {?>
    <div class="card">
      <div class="card__avatar"></div>
      <div class="card__body">
        <div class="card__info">
          <span class="card__info__author"><?php echo escape($row['nickname']);?>(@<?php echo escape($row['username'])?>)</span>
          <span class="card__info__time"><?php echo escape($row['created_at']);?></span>
          <?php
            if(!empty($_SESSION['username'])){
              if($row['username'] === $username || $user['role'] === 2) { 
          ?>
          <a href="update_comment.php?id=<?php echo $row['id'];?>">編輯</a>
          <a href="hand_delete_comment.php?id=<?php echo $row['id'];?>">刪除</a>
          <?php
              }
            }
          ?>
        </div>
        <div class="card__comment"><?php echo escape($row['content']);?></div>
      </div>
    </div>
    <?php }?>
  </main>
  <hr>
  <?php 
    $stmt = $conn->prepare('SELECT count(id) as count FROM k1325699_comments WHERE is_deleted IS NULL');
    $result = $stmt -> execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $count = $row['count'];
    $total_page = intval(ceil($count/$item_for_page));
  ?>
  <div class="page-info">
    總共<?php echo $count?>筆資料，<?php echo $page?>/<?php echo $total_page?>頁
  </div>
  <div class="paginator">
    <?php if($page!==1) {?>
    <a href="index.php?page=1">首頁</a>
    <a href="index.php?page=<?php echo $page-1;?>">上一頁</a>
    <?php }?>
    <?php if($page!== $total_page) {?>
    <a href="index.php?page=<?php echo $page+1;?>">下一頁</a>
    <a href="index.php?page=<?php echo $total_page;?>">末頁</a>
    <?php }?>
  </div>
  <script src="js/all.js"></script>
</body>
</html>