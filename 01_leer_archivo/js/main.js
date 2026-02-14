const resultado = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", darClick);

function darClick() {
  fetch("./data/mensaje.txt")
    .then((result) => result.text())
    .then((data) => getData(data))
    .catch((err) => console.log(err));
}

function getData(data) {
  resultado.textContent = data;
}
