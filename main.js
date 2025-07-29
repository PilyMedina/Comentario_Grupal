
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("commentForm");
  const nombreInput = document.getElementById("fname");
  const comentarioInput = document.getElementById("comment");
  const mensaje = document.getElementById("mensaje");
  const btnBorrar = document.getElementById("btnBorrar");

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
        cargarComentarios();
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

  function cargarComentarios() {
    fetch("leer_comentarios.php")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("contenedorComentarios").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error al cargar comentarios:", error);
      });
  }

  btnBorrar.addEventListener("click", () => {
    const confirmacion = confirm("¿Estás seguro de que quieres borrar todos los comentarios?");
    if (!confirmacion) return;

    fetch("borrar_comentarios.php", {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") {
          mostrarMensaje("Todos los comentarios fueron borrados.", "exito");
          cargarComentarios();
        } else {
          mostrarMensaje("No se pudieron borrar los comentarios.", "error");
        }
      })
      .catch(error => {
        console.error("Error al borrar:", error);
        mostrarMensaje("Error de conexión al borrar.", "error");
      });
  });

  cargarComentarios(); 
});
