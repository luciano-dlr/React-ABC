import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    // test('debe hacer match con snapshot', () => { 

    //     const title = 'Hola soy leio';

    //     const { container } = render(<FirstApp title={title}/>)

    //     expect(container).toMatchSnapshot();
    //  })

    test('debe mostrar el title en un h1', () => { 


        const title = 'Hola soy leio';

        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toBe(title)

     })

     test('debe mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola soy leio';
        const subTitle ='Soy un subtitulo';
        const { getByText } = render(<FirstApp 
            title={title}
            subtitle={subTitle}
            />)


        expect(getByText(subTitle)).toBeTruthy();
      })






})
