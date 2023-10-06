import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06 deses obj', () => {
  


    test('usContext debe retornar un bojeto ', () => {

       
        const clave = 'ironman'
        const edad = 22
        const user = usContext({ clave,edad})

        console.log(user)
        
        expect(user).toEqual({
            nombreClave: 'ironman',
            anios: 22,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
        
    })
    
    
})