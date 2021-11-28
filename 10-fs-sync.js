// Synchronous approach

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

//console.log(first, second) // reading the contents 

// to write new content/override the current inside a preexisting file on none existing one
//by default node create a new file if file doesnt already exists
writeFileSync (
    './content/result-syn.text',
    `Here is the result : ${first} ${second}`,
    { flag: 'a'}
)
//the first parameter is states/create and the  the file directory
// second parameter sets content
// third parameter for pushing/append new content 'a'