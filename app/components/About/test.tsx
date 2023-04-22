import {render, screen} from '@testing-library/react'

import {About} from '.'

describe("<About />", () => {
    it('should render a About compo', () => {
        render(<About title="Teste" about="Subtitulo" />)
        
        expect(screen.getByText(/Sobre/i))
        expect(screen.getByText(/Teste/i))
        expect(screen.getByText(/Subtitulo/i))
    })
})