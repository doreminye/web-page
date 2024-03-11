<?php

    $conn = new mysqli("localhost:3306", "root", "leeminhyeqq123", "book");
    if($conn->connect_error) echo "<h2>접속에 실패하였습니다.</h2>";


    //폼 데이터 읽기
    $recommend = $_GET["recommend"];

    echo "
    ".$_GET['recommend']." 을 선택하셨군요!<br>
    추천해주셔서 감사합니다^^
    ";

    //insert sql 작성
    $server = "localhost:3306";
    $id = "root";
    $pw = "leeminhyeqq123";
    $db = "book";

    $input_recommend = $_GET["recommend"];

    $conn = new mysqli($server, $id, $pw, $db);

    //연결 확인
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    //sql쿼리 작성 및 실행
    $sql = "INSERT INTO recommend(recommend) VALUES('".$input_recommend."')";
    $conn->query($sql);
    if($conn->query($sql)) echo "<script>alert('추천해주셔서 감사합니다^^');</script>";
    else echo "<script>alert('민혜님 데이터에  전송하는데 실패하였습니다.<br>다시 시도해주세요.');</script>";

    $conn->close();
    ?>