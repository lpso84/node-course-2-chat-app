var moment = require('moment');
//
// Var date = new Date();
//
// Console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9,'months')
// console.log(date.format('MMM Do, YYYY'));



var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt); // Se nao tiver arg usa o current time
console.log(date.format('h:mm a'));
