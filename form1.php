<?php

//получаем данные с формы в переменные

$userName = $_POST['user_name'];
$phone = $_POST['phone'];


// отправляем данные с формы на почту

mail("hr@marketing1.su", "Message from test", "Name: $userName, Phone: $phone");

// отправляем на фронт ответ в формате json

$data = "ok"; // переменная с ответом
header("Content-type: application/json"); // спец метод
echo json_encode($data); // собственно сам json, вместо echo можно писать return разницы нет
