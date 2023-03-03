  let magicianNames:string[] = ['saleem', 'umran', 'ali', 'nasir']  
function make_great(magicianNames:string[]) {
    for (let magician of magicianNames) {
        console.log(` Great ${magician}`)
    }
}

make_great(magicianNames)
