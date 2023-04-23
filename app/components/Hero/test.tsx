import { render, screen } from '@testing-library/react'

import { Hero } from '.'

describe('<Hero />', () => {
  it('should render a hero', () => {
    render(<Hero />)

    expect(screen.getByText(/js atelier/i))
    expect(screen.getByText(/maquiadora profissional/i))
    expect(screen.getByRole('button', { name: 'Agende sua Maquiagem' }))
  })
})
