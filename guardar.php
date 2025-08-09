<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $comentario = $conn->real_escape_string($_POST['comentario']);

    $sql = "INSERT INTO comentarios (nombre, comentario) VALUES ('$nombre', '$comentario')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.html#comentarios");
        exit;
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>
