<?php

$data = json_decode(file_get_contents("php://input"), true);

if ($data && isset($data['nombre']) && isset($data['comentario'])) {
    $nombre = htmlspecialchars(trim($data["nombre"]));
    $comentario = htmlspecialchars(trim($data["comentario"]));
    $fecha = date("Y-m-d H:i:s");

    $linea = "$fecha | $nombre: $comentario" . PHP_EOL;

    if (file_put_contents("comentarios.txt", $linea, FILE_APPEND)) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error", "mensaje" => "No se pudo guardar."]);
    }
} else {
    echo json_encode(["status" => "error", "mensaje" => "Datos inválidos."]);
}
?>

