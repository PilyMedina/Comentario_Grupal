document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("commentForm");
  const nombreInput = document.getElementById("fname");
  const comentarioInput = document.getElementById("comment");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const comentario = comentarioInput.value.trim();

    if (nombre === "" || comentario === "") {
      mostrarMensaje("Por favor, completa ambos campos.", "error");
      return;
    }

    try {
      const respuesta = await fetch("guardar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: nombre,
          comentario: comentario
        })
      });

      const resultado = await respuesta.json();

      if (resultado.status === "ok") {
        mostrarMensaje("¡Comentario enviado con éxito!", "exito");
        comentarioInput.value = "";
        nombreInput.value = "";
      } else {
        mostrarMensaje("Hubo un error al enviar tu comentario.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      mostrarMensaje("Error de conexión con el servidor.", "error");
    }
  });

  function mostrarMensaje(texto, tipo) {
    mensaje.innerText = texto;
    mensaje.className = tipo === "exito" ? "alert alert-success mt-3" : "alert alert-danger mt-3";
    setTimeout(() => {
      mensaje.innerText = "";
      mensaje.className = "";
    }, 3000);
  }
});
