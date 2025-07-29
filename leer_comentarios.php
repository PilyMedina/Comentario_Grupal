<?php
if (file_exists("comentarios.txt")) {
    $comentarios = file("comentarios.txt");
    foreach (array_reverse($comentarios) as $linea) {
        $partes = explode("|", $linea, 2);
        $fecha = trim($partes[0] ?? '');
        $contenido = trim($partes[1] ?? '');

        echo '
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <p class="card-text">' . htmlspecialchars($contenido) . '</p>
            <p class="card-subtitle text-muted small text-end">' . htmlspecialchars($fecha) . '</p>
          </div>
        </div>';
    }
} else {
    echo '<div class="alert alert-info">No hay comentarios aún.</div>';
}
?>
