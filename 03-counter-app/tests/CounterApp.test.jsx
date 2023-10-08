import { CounterApp } from "../src/CounterApp"
import { fireEvent, render,screen } from "@testing-library/react"

describe('Pruebas del counter APP', () => {

    const value = 100;

    test('Hacer match con el snapshot del counter', () => {

        const { container } = render(<CounterApp value={value} />)

        expect(container).toMatchSnapshot();

    })

    test('Counter app debe mostrar un valor inicial de 100', () => {

        render(<CounterApp value={value} />)

        expect(value).toBe(100)


    })

    test('debe de incrementar con el boton +1', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        
        expect(screen.getByText('101')).toBeTruthy()



     })
    test('debe de decrementar con el boton -1', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'))
        
        expect(screen.getByText('99')).toBeTruthy()
        // screen.debug()

     })
    test('debe de resetear el boton el valor del counter', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('reset'))

        fireEvent.click(screen.getByRole("button",{name:'btn-reset'}))

        expect(screen.getByText(100)).toBeTruthy()
        
        // screen.debug()

     })


})
