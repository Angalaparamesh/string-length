var anime_char=[]

function anime(str)
{
    if(!anime_char.includes(str)){
        anime_char.push(str)
    }
    else{
        console.log(`"${str}" is already in the array.`)
    }
}

anime("Naruto")
anime("Hinata")
anime("Itachi")
anime("Boruto")
anime("Sasuke")
anime("Kakashi")
anime("Naruto")


anime_char.sort()

console.log("Sorted Array:",anime_char)
console.log("Array length:",anime_char.length)