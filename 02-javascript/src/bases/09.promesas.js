import { getHeroeById } from "./bases/08-imp-exp";
// import heroes from "./data/heroes";
// import heroes from "./data/heroes";


// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //tarea
//         //importen el
//         const heroes = getHeroeById(2)
//         resolve(heroes)
//         // reject('No se pudo encontrar el heroe')
//     },2000)
// });


// promesa.then((heroe)=> {
//     console.log('Heroe',heroe)
// })
// .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroes = getHeroeById(id)
            if (heroes) {
                resolve(heroes)
                
            }else{
                reject('No se pudo encontrar el heroe')
            }
        }, 2000)
    });
}

//designar a los .then y .catch una funcion como resolucion para que ejecute el resolve o reject por referencia
getHeroeByIdAsync(5)
    .then(console.log )
    .catch(console.warn)