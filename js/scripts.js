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

//showing Pokemon values on the app:
for(i=0; i<repository.length; i++) {
  var itIsBig = repository[i].height > 5? ' -  Wow, that´s big!' : '';
  document.write(repository[i].name + ' (height: ' + repository[i].height + ')' + itIsBig);
  document.write("<br> <br>");
}

})(); //IIFE-Wrap closes here!
