<?php
  
   $Name = $_POST['Name'];
   $Number = $_POST['Number'];
   $Place = $_POST['Place'];
   $Counter = $_POST['Counter'];
   $comment = $_POST['comment'];
   $type = $_POST['type'];
   $terms = $_POST['terms'];

   if(! $terms){
      die("Terms must");
   }

   
     
   $host = "localhost";
   $dbname= "order";
   $username= "root";
   $password= "root";

   $conn =mysqli_connect(
      hostname: $host,
      username: $username,
      password: $password,
      database:$dbname);

      if(mysqli_connect_errno()){
die("connecting error: ".mysqli_connect_errno());
      }
      
      $sql =("INSERT INTO orders (Name,Number,Place,counter,comment,type)
   VALUES(?,?,?,?,?,?)");
 $stmt = mysqli_stmt_init($conn);

 if ( ! mysqli_stmt_prepare($stmt, $sql)) {
  
     die(mysqli_error($conn));
 }

 mysqli_stmt_bind_param($stmt, "sisisi",
 $Name,
 $Number,
 $Place,
 $Counter,
 $comment,
 $type
);

mysqli_stmt_execute($stmt);
 

echo"<div style='text-align:center;font-size:54px; font-weight: bold'> Спасибо за заказ</div>";
   echo "<p style='text-align:center;font-size:54px; font-weight: bold'><a href='index.html'>Главная страница
    </a></p>"
?>
 