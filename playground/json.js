// var obj = {
//   name: 'Moose'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj

var personString = '{"name":"Moose", "age": 25}';
var person = JSON.parse(personString); //convert to object
console.log(typeof person);
console.log(person);
