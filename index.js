import getPokemonService from "./services/pokemonService";
import "./style.css";

const button = document.getElementById("searchButton");
button.onclick = handleInputSearch;
const card = document.getElementById("card");
const error = document.getElementById("error");

function handleInputSearch() {
  const input = document.getElementById("searchInput");
  if (input.value) {
    handleServiceSearch(input.value);
  } else {
    setError("Debe ingresar un numero para realizar la busqueda.");
  }
}

async function handleServiceSearch(id) {
  setLoading(true);
  try {
    const res = await getPokemonService({ id: id });
    setLoading(false);
    setCardValues(res);
  } catch {
    setLoading(false);
    setError("No se encontraron resultados con el numero ingresado. Intente nuevamente.");
  }
}

function setCardValues(data) {
  const image = document.getElementById("cardImage");
  const name = document.getElementById("cardName");
  const type = document.getElementById("cardType");
  const height = document.getElementById("cardHeight");
  const weight = document.getElementById("cardWeight");

  console.log("Data:", data);

  error.classList.remove("active");
  card.classList.add("active");

  if (data.sprites) {
    image.src = data.sprites.front_default;
  }

  if (data.name) {
    name.innerText = data.name;
  }

  if (data.types) {
    type.innerText = data.types[0].type.name;
  }

  if (data.height) {
    height.innerText = data.height / 10;
  }

  if (data.weight) {
    weight.innerText = data.weight / 10;
  }
}

function setError(message) {
  card.classList.remove("active");
  error.innerText = message;
  error.classList.add("active");
}

function setLoading(status) {
  const loading = document.getElementById("serviceLoading");
  if (status) {
    loading.classList.add("active");
  } else {
    loading.classList.remove("active");
  }
}
