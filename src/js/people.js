// const text = 'Hello World'
// export default text;
let $ = require('jquery');
// require('./css/main.css')


var people = [
  {name: 'Carol Miller'},
  {name: 'Bernie Sanders'},
  {name: 'Richard Ojeda'},
]

function printOutPeople(){
  people.forEach((element, index) => {
    let p = document.createElement('p');
    p.innerHTML = `Person ${index}: ${element.name}`
    debugger
    $('h1').append(p)
  });
} 

module.exports = { printOutPeople: printOutPeople, people: people}

