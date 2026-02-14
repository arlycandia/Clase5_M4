const resultado = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => getData(data))
    .catch((error) => console.log(err));
});

function getData(data) {
  data.forEach((item) => {
    resultado.innerHTML += `<p>${item.name}, - ${item.email}</p>`;
  });
}
