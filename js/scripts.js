var repository = [];

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

repository.push(bulbasaur, squirtle, charmander, pidgey, weedle);

for(i=0; i<repository.length; i++) {
  var itIsBig = repository[i].height > 5? ' -  Wow, that´s big!' : '';
  document.write(repository[i].name + ' (height: ' + repository[i].height + ')' + itIsBig);
  document.write("<br> <br>");
}
