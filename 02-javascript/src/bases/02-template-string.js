

const nombre = 'Luciano';
const apellido = 'rubia';

// const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `Hola 
${nombre} 
${apellido}
`;

console.log(nombreCompleto)

function getSaludo (Nombre) {
    return 'hola mundo ' + Nombre
}

console.log(`este es el texto de la function: ${getSaludo(nombre)}`)