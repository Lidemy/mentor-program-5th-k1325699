<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>註冊</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <a href="index.php" class="board-btn">回留言板</a>
    <a href="login.php" class="board-btn">登入</a>
    <h1 class="board__title">註冊</h1>
    <?php
      if(!empty($_GET['errCode'])){
        if ($_GET['errCode'] === '1'){
          echo '<h2 class="error">資料不齊全</h2>';
        }
        if ($_GET['errCode'] === '2'){
          echo '<h2 class="error">帳號已被註冊</h2>';
        }
      }
    ?>
    <form action="hand_register.php" method="post" class="board__new-comment">
      <div class="board__nickname">
        暱稱: <input type="text" name="nickname" id="">
      </div>
      <div class="board__nickname">
        帳號: <input type="text" name="username" id="">
      </div>
      <div class="board__nickname">
        密碼: <input type="password" name="password" id="">
      </div>
      <input type="submit" value="提交" class="board__submit-btn">
    </form>
  </main>

</body>
</html>