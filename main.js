const titulo = document.querySelector(".titulo");
const parrafo = document.querySelector(".parrafo");

const nuevoContenido = () => {
  titulo.innerHTML = "Bye :(";
  parrafo.innerHTML = "Se te acabo el tiempo!";
  parrafo.style.color = "red";
};

setTimeout(() => {
  nuevoContenido();
}, 3000);
