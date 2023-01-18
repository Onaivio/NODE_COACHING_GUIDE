var fs = require('fs')
var data = fs.readFileSync('text.txt')
console.log(data.toString())
console.log('End Here')