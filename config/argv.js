const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    description: 'Base number for multiplication table',
    default: 5 
  }).option('l', {
    alias: 'list',
    type: 'boolean',
    description: 'Show table in console',
    default: false
  }).option('u', {
    alias: 'until',
    type: 'number',
    description: 'Limit number rows of multiplication table',
    default: 12
  }).check((argv, options) => {
    if (isNaN(argv.b))
      throw 'base must be a number'
    return true
  }).argv
  
module.exports = argv