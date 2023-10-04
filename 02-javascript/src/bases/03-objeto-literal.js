const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1233333,
        lat: 14.2323,
        lng: 34.3434,
    }

};

console.log(persona)
console.table(persona)


const persona2 = {...persona};




console.log(persona2)