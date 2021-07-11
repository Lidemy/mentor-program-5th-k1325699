<?php
  require_once('conn.php');
  header("Content-Type:application/json;charset=utf-8");
  $site_key = $_GET['site_key'];
  $before = NULL;
  if(!empty($_GET['before'])){
    $before =$_GET['before'];
  };
  $sql = 'SELECT * FROM k1325699_discussions WHERE site_key = ? '.
  (empty($_GET['before'])?'':'and id < ? ').
'ORDER BY id DESC limit 5';
  $stmt =$conn->prepare($sql);
  if(empty($_GET['before'])){
    $stmt->bind_param('s',$site_key);
  }else{
    $stmt->bind_param('si',$site_key,$before);
  }
  $result = $stmt->execute();
  if(!$result){
    $json = array(
      'ok'=>false,
      'message'=>$conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $result = $stmt->get_result();
  
  $discussions = array();
  while($row=$result->fetch_assoc()){
    array_push($discussions,array(
      'id'=>$row['id'],
      'nickname'=>$row['nickname'],
      'created_at'=>$row['created_at'],
      'content'=>$row['content']
    ));
  };
  $json = array(
    'ok'=>true,
    'discussions'=>$discussions
  );
  $response = json_encode($json);
  echo $response;
?>