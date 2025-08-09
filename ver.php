<?php
include 'conexion.php';

$sql = "SELECT nombre, comentario, fecha FROM comentarios ORDER BY fecha DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<div style='padding:10px; font-family: Arial, sans-serif;'>";
    while($row = $result->fetch_assoc()) {
        echo "<p><strong>" . htmlspecialchars($row["nombre"]) . "</strong> (" . $row["fecha"] . ")<br>";
        echo nl2br(htmlspecialchars($row["comentario"])) . "</p><hr>";
    }
    echo "</div>";
} else {
    echo "<p>No hay comentarios aún.</p>";
}
$conn->close();
?>
