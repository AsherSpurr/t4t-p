
const roundNum = (num) => {
   return Number(num.toFixed(2))
}

const filters = [
   {
      type: 'checkbox',
      name: 'input',
      id: 'accessible'
   },
   {
      type: 'checkbox',
      name: 'input',
      id: 'unisex'
   },
   {
      type: 'checkbox',
      name: 'input',
      id: 'all'
   }
]

export { roundNum, filters }