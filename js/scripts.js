//IIFE-Wrap: please wrap all within it!
var pokemonRepository = (function() {

  //Declaring the repository array:
  var repository = [];
  //API-Adress:
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //Var to hide/show:
  var $modalContainer = document.querySelector('#modal-container');
  //details-menue var:
  var $detailsMenue = document.querySelector('#details-menue');

  //show-details function:
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
    console.log(item);  //still useful as a test
    pokemonRepository.showModal(item);

    //cleaning the previous details:
    $detailsMenue.innerHTML = '';

    var detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');

    var nameElement = document.createElement('p');
    nameElement.classList.add('name-p');
    nameElement.innerText = item.name;

    var imageElement = document.createElement('img');
    imageElement.classList.add('details-image');
    imageElement.setAttribute("src",item.imageUrl);

    var heightElement = document.createElement('p');
    heightElement.classList.add('details-p');
    heightElement.innerText = 'height: '+item.height;

    var typesElement = document.createElement('p');
    typesElement.classList.add('details-p');
    typesElement.innerText='type: '+ item.types.join(', ');

    detailsWrapper.appendChild(nameElement);
    detailsWrapper.appendChild(imageElement);
    detailsWrapper.appendChild(typesElement);
    detailsWrapper.appendChild(heightElement);
    $detailsMenue.appendChild(detailsWrapper);
    });
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
      item.types = details.types.map(function(item) {return item.type.name});
    }).catch(function (e) {
      console.error(e);
    });
  }

  //add-list-item function:
  function addListItem(pokemon) {
    var listItemText = document.createTextNode(pokemon.name);      //$p-text
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
      showDetails(pokemon);
    });
  }

  //show-modal function:
  function showModal(item) {

    $modalContainer.innerHTML = '';

    //creating the modal div:
    var modal = document.createElement('div');
    modal.classList.add('modal');

    //adding html elements to the modal container:
    var closeButtonElement = document.createElement('button'); //closing button
    closeButtonElement.classList.add('close-button');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = item.name;

    var heightElement = document.createElement('p');
    heightElement.innerText = 'Height: '+item.height;

    var imageElement=document.createElement('img');
    imageElement.classList.add('modal-image');
    imageElement.setAttribute("src",item.imageUrl);

    var typesElement=document.createElement('p');
    typesElement.innerText='Type: '+ item.types.join(', ');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(typesElement);
    modal.appendChild(heightElement);
    $modalContainer.appendChild(modal);

    //turn modal visible:
    $modalContainer.classList.add('is-visible');
  }

  //closing-modal via close button:
  function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }

  //escape-quit:
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //click-outside-window-quit:
  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  //return function:
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})(); //IIFE-Wrap closes here!

//loadList promise:
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
