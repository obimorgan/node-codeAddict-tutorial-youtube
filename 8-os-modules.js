// Modules - Encapsulated code (only share minimum)
// Common JS - Every file is module(by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeWay-exporting')
require('./7-mind-grenade')


// sayHi("Susan")
// // sayHi(john)//undefined
// // sayHi(peter)//undefined
// sayHi(names.john)//neeed to access the object
// sayHi(names.peter)//neeed to access the object
// sayHi(data.items)
// sayHi(data.singlePerson.name)

