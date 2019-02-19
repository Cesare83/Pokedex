//IIFE-Wrap: please wrap all within it!
var pokemonRepository = (function() {

  //Declaring the repository array:
  var repository = [];
  //API-Adress:
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //show-details function:
  function showDetails(pokemonItem) {
    console.log(loadDetails(pokemonItem));
  }

  //get-All function:
  function getAll() {
    return repository;
  }

  //add-Pokemon-Objects function:
  function add(pokemon) {
    repository.push(pokemon);
  }

  //load pokemons from API: (syncro)
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //load pokemon-details by clicking showDetailsButton:
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  //add-list-item function:
  function addListItem(pokemonItem) {
    var listItemText = document.createTextNode(pokemonItem.name);      //$p-text
    var buttonText = document.createTextNode('show details');          //$details-button text

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

    $detailsButton.addEventListener('click', function(event) {       //show-details function
      showDetails(pokemonItem);
    });
  }

  //return function:
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})(); //IIFE-Wrap closes here!

pokemonRepository.loadList();

//getting the Objects-Array to work with:
var newPokemonRepository = pokemonRepository.getAll();

newPokemonRepository.forEach(function(pokemonItem) {
  pokemonRepository.addListItem(pokemonItem);
});
