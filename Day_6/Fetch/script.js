async function fetchPoke() {
  const poke = document.getElementById("pokeName").value.toLowerCase();
  const pokeImg = document.getElementById("pokemonSprite");
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

  if (!response.ok) {
    throw new Error("Pokemon is not present in PokeDek");
  } else {
    const data = await response.json();
    pokeImg.src = data.sprites.front_default;
    pokeImg.style.display = "block";
  }
}

//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
