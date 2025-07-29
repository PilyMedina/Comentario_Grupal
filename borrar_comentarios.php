<?php
$archivo = "comentarios.txt";

if (file_exists($archivo)) {
    file_put_contents($archivo, ""); 
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "error", "mensaje" => "El archivo no existe."]);
}
?>
