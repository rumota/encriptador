function encriptarPalabra() {
    let texto = document.getElementById("texto").value;
    
    let nuevoTexto = texto
      .replace(/e/gi, "entro")
      .replace(/i/gi, "inter")
      .replace(/a/gi, "ata")
      .replace(/o/gi, "obre")
      .replace(/u/gi, "ure");

    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    if (texto.length != 0) {
      document.getElementById("texto").value = nuevoTexto;
      tituloMensaje.textContent = "Se encripto su texto.";
      parrafo.textContent = "";
      imagen.src = "./imagenes/en.jpg";
    } else {
      tituloMensaje.textContent = "Debe agregar un texto.";
      parrafo.textContent = "Ingresa tu texto para encriptar.";
      alert("Debes ingresar un texto", "warning");
    }
  }

  function desencriptarPalabra() {
    let texto = document.getElementById("texto").value;
    
    let viejoTexto = texto
      .replace(/entro/gi, "e")
      .replace(/ata/gi, "a")
      .replace(/obre/gi, "o")
      .replace(/inter/gi, "i")
      .replace(/ure/gi, "u");

    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

      if (texto.length != 0) {
        document.getElementById("texto").value = viejoTexto;
        tituloMensaje.textContent = "Se desencripto su texto.";
        parrafo.textContent = "";
        imagen.src = "./imagenes/des.jpg";
      } else {
        tituloMensaje.textContent = "Agregue un texto por favor.";
        parrafo.textContent = "Ingresa el texto que deseas desencriptar.";
        alert( "Debes ingresar un texto", "warning");
      }
  }
  