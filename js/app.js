'use strict';
var questions = [
  'Is Rick and Morty the greatest show with the worst fans?',
  'Is 42 the answer to life, the universe, everything?',
  'Is it a good idea to avoid hungry bears?',
  'Should we stop asking about Woodchuck\'s and their wood chucking?',
  'Hello, is it me you\'re looking for?'
];

var currentHref = window.location.href;

for (let i = 0; i < questions.length; i++){
  var res = prompt('Yes or no:\n' + questions[i]).toLowerCase();
  console.log('user responded with: \n' + questions[i] + ' distilled to' + res[0]);
  if (res[0] === 'y') {
    alert('You have the correct opinion');
  } else if (res[0] === 'n') {
    alert('Thats....thats the wrong opinion');
  } else {
    alert('Get off my page illitarate traveler!');
    //This forces a redirect for not answering with a yes or no. In doing so, it compleatly overwrites the current url, removing the back funcitonallity. Here I'm pushing the current location into history
    history.pushState(null, null, window.location.href);
    console.log(currentHref);
    //this forces a redirect for not answering with a yes or no.
    window.location.href = 'https://www.google.com/search?ei=dPn2XLj7DOCU0PEPuta6oAk&q=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too&oq=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too';
    break;
  }
}

