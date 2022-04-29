const POKEMONS = [
  {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png"
  },
  {
    id: 4,
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/4.png"
  },
  {
    id: 7,
    name: "squirtle",
    image:
      "https://i.kym-cdn.com/entries/icons/original/000/019/837/CWp2zVTXIAAHgWV.jpg"
  }
];
function getNode(selector) {
  return document.querySelector(selector);
}
function getPokemonById(id) {
  const input = getNode("search-pokemon-input");
  return input.value;
}

function showPokemon(id) {
  getNode(".pokemon_name").innerText = POKEMONS[0].name;
  getNode(".pokemon_id").innerText = POKEMONS[0].id;
  getNode(".pokemon_image").src = POKEMONS[0].image;
}

function main() {
  const pokemonId = getPokemonById();
  const pokemon = getPokemonById(pokemonId);
  showPokemon(pokemon);
}

main();

const form = getNode(".search-pokemon");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  main();
});
