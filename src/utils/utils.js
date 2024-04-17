
const roundNum = (num) => {
   return Number(num.toFixed(2))
}

// const formatSearchParams = (url) => {
//    const newUrl = url.split('=')
   
//    newUrl.splice(0, 1)
//    // console.log('newUrl', newUrl)

//       if(newUrl.includes('unisex&b')) {
//          const cleanedUnisex = newUrl[0].slice(0, 6)
//          newUrl.splice(0, 1, cleanedUnisex)
//          // console.log('extra new', newUrl)
//          return newUrl
//       } else if(newUrl.includes('accessible&b')) {
//          const cleanedAccessible = newUrl[0].slice(0, 10)
//          newUrl.splice(0, 1, cleanedAccessible)
//          // console.log('new access', newUrl)
//          return newUrl
//       } else {
//          // console.log('newUrl', newUrl)
//          return newUrl
//       }

// }

export { roundNum }