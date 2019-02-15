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

  //add-list-item function:
  function addListItem(pokemonItem) {
    var listItemText = document.createTextNode(pokemonItem.name);      //$p-text
    var buttonText = document.createTextNode("show details");          //$details-button text

    var $p = document.createElement('p');                              //creating elements on DOM
    var $detailsButton = document.createElement('button');
    var $li = document.createElement('li');
    var $ul = document.querySelector('ul');

    $detailsButton.classList.add('details-button');                   //adding styling to the elements
    $li.classList.add('list-item');
    $ul.classList.add('pokemon-list');

    $detailsButton.appendChild(buttonText);                           //appending them to $pokemon-list
    $p.appendChild(listItemText);
    $li.appendChild($p);
    $li.appendChild($detailsButton);
    $ul.appendChild($li);
  }

  //get-All function:
  function getAll() {
    return repository;
  }

  //add-Pokemon-Objects function:
  function add(pokemon) {
    repository.push(pokemon);
  }

  //return function:
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})(); //IIFE-Wrap closes here!

//getting the Objects-Array to work with:
var newPokemonRepository = pokemonRepository.getAll();

newPokemonRepository.forEach(function(pokemonItem) {
  pokemonRepository.addListItem(pokemonItem);
});
