import  heroes  from "../data/heroes"

// console.log(heroes)
// console.log(owners)

//realizar un find de heroes en el callback 
//donde retornamos solo al heroe que cumple el requisito de pasar el parametro
// igual al id
const getHeroeById = (id) => {
    return heroes.find((heroes) => id === heroes.id)
}

// console.log(getHeroeById(2))


//Utilizar filter
// El método filter() crea un nuevo array con todos los elementos que
//  cumplan la condición implementada por la función dada.
const getHeroesByOwner = (owner) => {

    return heroes.filter((heroes) => owner === heroes.owner)

}

// console.log(getHeroesByOwner('DC'))

export{
    getHeroeById,
    getHeroesByOwner
}