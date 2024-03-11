<?php
            
    $conn = new mysqli("localhost:3306", "root", "leeminhyeqq123", "book");
    if($conn->connect_error) echo "<h2>접속에 실패하였습니다.</h2>";
    

    #폼 데이터 읽기
    $date = $S_POST["date"];
    $name = $S_POST["name"];
    $writing = $S_POST["writing"];

    echo "
    ".$_POST['name']."님이 ".$_POST['date']." 에 방문하셨습니다.<br>
    민혜님께 '".$_POST['writing']."' (이)라고 방명록을 남기셨어요!
    ";

    #insert sql 작성
    $server = "localhost:3306";
    $id = "root";
    $pw = "leeminhyeqq123";
    $db = "book";

    $input_name = $_POST["name"];
    $input_writing = $_POST["writing"];
    $input_date = $_POST["date"];

    $conn = new mysqli($server, $id, $pw, $db);

   #연결 확인
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    #sql쿼리 작성 및 실행
    $sql = "INSERT INTO guestbook(date, name, writing) VALUES('".$input_date."', '".$input_name."', '".$input_writing."')";
    $conn->query($sql);
    if($conn->query($sql)) echo "<script>alert('민혜님 데이터에 방명록을 전송하는데 성공하였습니다.');</script>";
    else echo "<script>alert('민혜님 데이터에 방명록을 전송하는데 실패하였습니다.<br>다시 시도해주세요.');</script>";

    $conn->close();
    ?>