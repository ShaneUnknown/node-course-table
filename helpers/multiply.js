const fs = require('fs')
require('colors')

const makeTable = async (base = 5, list = false, until = 12) => {
  try {
    let output = `========================\n ${base} multiplication table\n========================\n`
    let customConsole = `${'========================='.brightBlue}\n ${base} multiplication table\n${'========================='.brightBlue}\n`
    for (let i = 1; i <= until; i++) {
      output += `${base} x ${i} = ${i*base}\n`
      customConsole += `${base} ${'x'.green} ${i} ${'='.magenta} ${i*base}\n`
    }
    if (list)
      console.log(customConsole)
    fs.writeFileSync(`output/table-${base}.txt`, output)
    return `${base} multiplication table`
  } catch (err) {
    throw err
  }
  
}

module.exports = {
  makeTable
}