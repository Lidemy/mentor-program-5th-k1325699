<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/normalize.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="all_article.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <?php if(!empty($_SESSION['username'])) { ?>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
          <?php }else{ ?>
          <li><a href="login.php">登入</a></li>
          <?php } ?>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <?php
    $stmt = $conn->prepare('SELECT * FROM k1325699_blog_articles WHERE is_deleted IS NULL ORDER BY id DESC');
    $result = $stmt->execute();
    if(!$result) {
      die ($conn->error);
    }
    $result = $stmt->get_result();
  ?>
  <div class="container-wrapper">
    <div class="posts">
      <?php
        while($row = $result->fetch_assoc()) {
      ?>
      <article class="post">
        <div class="post__header">
          <div class = "post__title"><?php echo escape($row['title']); ?></div>
          <div class="post__actions">
          <?php if(!empty($_SESSION['username'])) { ?>
            <a class="post__action" href="update_article.php?id=<?php echo $row['id'];?>">編輯</a>
          <?php } ?>
          </div>
        </div>
        <div class="post__info">
        <?php echo escape($row['created_at']); ?>
        </div>
        <div class="post__content post__content__hidden"><?php echo escape($row['content']); ?>
        </div>
        <a class="btn-read-more" href="article.php?id=<?php echo $row['id'];?>">READ MORE</a>
      </article>
      <?php } ?>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>