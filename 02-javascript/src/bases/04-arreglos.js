//arreglos en JS

// const arreglo = new Array();

const arreglo = [1, 2, 3, 4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)



//spread operator para reasignar a una variable el mismo contenido iterado
let arreglo2 = [...arreglo, 5]


//devolver un nuevo array con un callback interno especificado
const arreglo3 = arreglo2.map((numero) => {
    return numero * 2
})




console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
