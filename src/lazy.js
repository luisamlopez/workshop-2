let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target;
  imgNode.src = imgNode.dataset.src;
  imgNode.onload = () => {
    loadedImages += 1;
    logState();
  };
  observer.unobserve(imgNode);
};

const observer = new IntersectionObserver((entries) => {
  //    Con el IntersectionObserver podemos decirle a JavaScript
  // que observe un objeto cuando está dentro de la pantalla
  // (o cuando sale de esta)

  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
  totalImages += 1;
  logState();
};
function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}
