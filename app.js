const { makeTable } = require('./helpers/multiply')
const argv = require('./config/argv')
require('colors')

console.clear()

makeTable(argv.base, argv.list, argv.until).then(fileName => console.log(`${fileName} created successfully`.cyan)).catch(err => console.log(err))
