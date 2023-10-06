import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en ', () => {



    // test('getHeroeById debe de retornar un heroe por ID', () => { 

    //     const id = 1;
    //     const hero = getHeroeById(id)
    //     console.log(hero)


    //     expect(hero).toEqual({id:1,name:'Batman',owner: 'DC'})
    //  })
    // test('getHeroeById debe de retornar undefined si no existe', () => { 

    //     const id = 100;
    //     const hero = getHeroeById(id)
    //     console.log(hero)


    //     expect(hero).toBeFalsy()
    //  })

    

     test('getHeroesByOwner debe de retornar un arreglo con heroes length === 3', () => { 

        
        const owner = 'DC'
        const hero = getHeroesByOwner(owner)
        console.log(hero)

      //   expect(hero.length).toBe(3)
      //   expect(hero).toEqual(hero.filter((hero)=> hero === owner))



        
     })


  
})
