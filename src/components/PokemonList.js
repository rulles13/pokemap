let pokemons = [
    {name: "aspicot", icon: "aspicot.png"},
    {name: "bellsprout", icon: "bellsprout.png"},
    {name: "bulbasaur", icon: "bulbasaur.png"},
    {name: "dratini", icon: "dratini.png"},
    {name: "evoli", icon: "evoli.png"}
]

let PokemonList = [];
let nbrOfPokemons = 5;

for (let i=0; i<nbrOfPokemons; i++) {
    let x = Math.floor(Math.random() * pokemons.length)
    PokemonList.push(pokemons[x]);
}


export default PokemonList

