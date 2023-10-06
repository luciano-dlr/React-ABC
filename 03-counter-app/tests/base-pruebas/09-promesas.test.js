import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09 promesas', () => {
    // test('getHeroeByIdAsync debe retornar un heroe', (done) => { 



    //     const id = 1;
    //     getHeroeByIdAsync(id)
    //     .then(hero => {


    //         expect(true).toEqual({
    //             id:1,
    //             name:'Batman',
    //             owner:'DC'
    //         })

    //         done();
            
    //     })
    //  })
    test('getHeroeByIdAsync debe retornar un heroe', () => { 



        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error => {


            expect(error).toBe(`no se pudo encontrar el heroe ${id}`)
            // done();
            
        })
     })
  
})
