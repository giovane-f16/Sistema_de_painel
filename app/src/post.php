<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["nome_usuario"]);

    file_put_contents("../data.txt", $username);

    header("Location: /");
    exit();
}
