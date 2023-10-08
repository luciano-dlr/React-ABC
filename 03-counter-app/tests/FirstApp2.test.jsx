import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    const title = 'Hola soy leio';
    const subtitle = 'Soy un subtitle'

    test('debe hacer match con snapshotfirst', () => {

        const { container } = render(<FirstApp tittle={title} />)

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje hola soy leio', () => {


        render(<FirstApp title={title} />)
        expect(screen.getAllByText(title)).toBeTruthy();
        // screen.debug()

    })

    test('debe mostrar el titulo en un h1', () => {

        render(<FirstApp title={title} />)
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title)

    })

    test('debe mostrar subtitule por props', () => {

        render(<FirstApp
            title={title}
            subtitle={subtitle}
        />
        );

        expect(screen.getAllByText(subtitle).length).toBe(1)



    })



})
