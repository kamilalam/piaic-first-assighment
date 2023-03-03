const previousList = ['Ahmed','Aslam','Nouman']
console.log('Dear all we have found a bigger dinner table and want invite some more friends')
previousList.unshift('Amreen') // adding guest at beginnig of list
console.log(previousList)
 previousList.splice(2,0,'Azfer') // adding guest at middle
console.log(previousList)
previousList.push('Saleem') // we can't use append() for array 
console.log(previousList)
//new invitation
console.log(`Dear ${previousList[0]},please come for a dinner today`)
console.log(`Dear ${previousList[1]},please come for a dinner today`)
console.log(`Dear ${previousList[2]},please come for a dinner today`)
console.log(`Dear ${previousList[3]},please come for a dinner today`)
console.log(`Dear ${previousList[4]},please come for a dinner today`)
console.log(`Dear ${previousList[5]},please come for a dinner today`)