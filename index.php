
// Cargar comentarios desde el archivo JSON

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Formulario Comentario</title>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
 
    <form id="commentForm">
    <div class="container contact">
      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h1>Formulario de Contacto</h1>
            <h4>Escribenos Leemos Tus Comentarios!</h4>
          </div>
        </div>

        <div class="col-md-9">
          <div class="contact-form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname">Nombre</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Ingrese su Nombre"
                  name="fname"
                />
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-2" for="comment">Comentario</label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                ></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Enviar</button>
              </div>
            </div>
            </form>
            <h3 class="mb-4">Comentarios recibidos</h3>
        
          //logica php para mostrar comentarios
          </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <h3>Todos los Derechos Reservados 2025 @</h3>
    </footer>

    <script src="main.js"></script>
  </body>
</html>
