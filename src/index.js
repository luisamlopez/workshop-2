import { registerImage } from "./lazy";
import { createImageNodes } from "./utils";

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

const imageContainer = document.querySelector("#images");

const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});

// Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});

// data-cualquiercosa sirven para definir atributos personalizados
// dentro de HTML, es decir, puedes inventarte atributos,
// son muy útiles para pasar datos
// entre HTML y JavaScript, su sintaxis consta en que SIEMPRE
// deben iniciar con data- y después de eso puedes poner cualquier cosa
