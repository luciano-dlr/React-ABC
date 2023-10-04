// functions en Js

const saludar = function (nombre) {
    return `hole, ${nombre}`;
}

const saludar2 = (nombre) => {

    return `hole, ${nombre}`;

}

const saludar3 = (nombre) => `Hola, ${nombre}`


// console.log(saludar3('vegeta'))

const getUser = () => ({

    uid: 'ABC123',
    username: 'El_lokito'

});

// console.log(getUser())

const user = getUser()
// console.log(user);


//tarea
//1 transformen a una funcion de flecha
//2 retornar un bojeto inplicito
function getUsuarioActivo (nombre) {
    return {
        uid:'ASDASD',
        username:nombre

    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)


//solucion

const getUsuarioActivo2 = (nombre) => ({
        uid:'ASDASD',
        username:nombre,
})

const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo)







