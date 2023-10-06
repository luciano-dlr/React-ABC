import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    test('debe hacer match con snapshot', () => { 

        const title = 'Hola soy leio';

        const { container } = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();
     })

    test('debe mostrar el title en un h1', () => { 


        const title = 'Hola soy leio';

        const { container, getByText } = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title)

     })






})
