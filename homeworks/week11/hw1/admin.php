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

  $stmt = $conn->prepare('SELECT * FROM k1325699_users ORDER BY  id ASC');
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
  <title>權限管理</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <a href="index.php" class="board-btn">回留言板</a>
    <h1 class="board__title">權限後台</h1>
    <?php
      if(!empty($_GET['errCode'])){
        if ($_GET['errCode'] === '1'){
          echo '<h2 class="error">沒有更改</h2>';
        }
      }
    ?>
    <table>
      <tr>
        <th>#</th>
        <th>username</th>
        <th>nickname</th>
        <th>權限</th>
        <th></th>
      </tr>
      <?php
        while ($row = $result->fetch_assoc()) {
      ?>
      <tr>
        <td><?php echo $row['id']?></td>
        <td><?php echo $row['username']?></td>
        <td><?php echo $row['nickname']?></td>
        <form action="hand_update_role.php" method="post">
          <td>
            <input type="hidden" name="username" value="<?php echo $row['username']?>">
            <select name="role" id="">
              <?php if($row['role'] === 2){?>
              <option value="2" selected>管理員</option>
              <?php }else{?>
              <option value="2">管理員</option>
              <?php }?>
              <?php if($row['role'] === 1){?>
              <option value="1" selected>一般使用者</option>
              <?php }else{?>
              <option value="1">一般使用者</option>
              <?php }?>
              <?php if($row['role'] === 0){?>
              <option value="0" selected>遭停權使用者</option>
              <?php }else{?>
              <option value="0">遭停權使用者</option>
              <?php }?>
            </select>
          </td>
          <td><input type="submit" value="更改" class="admin-btn"></td>
        </form>
      </tr>
      <?php }?>
    </table>
</body>
</html>