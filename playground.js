const icons = require('./icons.json')
const fs = require('fs')
const data = icons.selection.map((item)=>`'${item.name}'`)

const formatted = data.reduce((accumulator, currentValue, currentIndex)=>{
  return `${accumulator} | ${currentValue}`
})

const template = `
  epxort type I_Icons = ${formatted}
`

fs.writeFileSync('./test.d.ts',template,'utf-8')

