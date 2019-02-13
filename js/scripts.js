//IIFE-Wrap: please wrap all within it!
var pokemonRepository = (function() {

  //Declaring the repository array:
  var repository = [];

  //Declaring the Pokemon objects:
  var bulbasaur = {
    name : 'Bulbasaur',
    height : 7,
    type : ['grass', 'poison'],
    evolution : ['bulbasaur', 'ivysaur', 'venusaur' ],
  };

  var squirtle = {
    name : 'Squirtle',
    height : 3.5,
    type : ['water'],
    evolution : ['squirtle', 'wartortle', 'blastoise'],
  };

  var charmander = {
    name : 'Charmander',
    height : 7,
    type : ['fire'],
    evolution : ['charmander', 'charmeleon', 'charizard'],
  };

  var pidgey = {
    name : 'Pidgey',
    height : 3.5,
    type : ['normal', 'flying'],
    evolution : ['pidgey', 'pidgeotto', 'pidgeot'],
  };

  var weedle = {
    name : 'Weedle',
    height : 3.5,
    type : ['bug', 'poison'],
    evolution : ['weedle', 'kakuna', 'beedrill'],
  };

  //pushing the Pokemon objects into the repository array:
  repository.push(bulbasaur, squirtle, charmander, pidgey, weedle);

  //get-All function:
  function getAll() {
    return repository;
  }

  //add-function:
  function add(pokemon) {
    repository.push(pokemon);
  }

  //return-function:
  return {
    add: add,
    getAll: getAll
  };
})(); //IIFE-Wrap closes here!

//getting the Objects-Array to work with:
var newPokemonRepository = pokemonRepository.getAll();

/*Displaying name and height of the Pokemons
newPokemonRepository.forEach(function(pokemon){
  if(pokemon.height > 5) {
    document.write(pokemon.name + ', height ' + pokemon.height + " - Wow, that's big!");
  } else {
    document.write(pokemon.name + ', height ' + pokemon.height);
  }
  document.write('<br> <br>');
});
*/
