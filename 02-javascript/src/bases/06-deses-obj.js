//Desestructuracion 
//Asignacion Desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
}

const { nombre, edad, clave } = persona;

// console.log(nombre, edad, clave);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({clave,nombre,edad, rango= 'capitan'}) => {
// console.log(nombre , edad, rango)
return {
    nombreClave: clave,
    anios:edad,
    latlng: {
        lat:14.123,
        lng:-12.33333
    }
}
}

const avenger = useContext(persona);

//asignacion desestructurante, es especificar que quiero desestructurar persona que proviene del return de la funcion useContext
const {anios,nombreClave,latlng} = useContext(persona)
const { lat,lng }= latlng;

// console.log(avenger)
console.log(anios,nombreClave)
console.log(lat,lng)

