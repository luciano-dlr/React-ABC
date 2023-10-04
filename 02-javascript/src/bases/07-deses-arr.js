const personajes = ['gokue','vegeta','trunks'];

const [ , ,p3] = personajes

// console.log(p3)


const retornaArreglo = () => {
    return ['ABC',123]
}


const [letras,numeros] = retornaArreglo()

// console.log(letras,numeros)


// tarea
//1 primer valor del arr se llamara nombre
//2 primer valor del arr se llamara setNombre
const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }]
}

const [nombre, setNombre] = useState('Goku')


console.log(nombre)
setNombre()