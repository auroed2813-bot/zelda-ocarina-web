<?php
$servername = "localhost";  // Cambia si no es localhost
$username = "tu_usuario";    // Cambia por tu usuario MySQL
$password = "tu_contraseña"; // Cambia por tu contraseña MySQL
$dbname = "zelda_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
$conn->set_charset("utf8");
?>
