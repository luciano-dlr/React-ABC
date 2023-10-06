import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('11 async await debe retornar una imagen', () => {

    test('retornar un gif getImagen', async() => { 

        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe('string')


     })
  
})
