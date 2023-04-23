import { render, screen, fireEvent } from '@testing-library/react'

import { Header } from '.'
import { MenuContextProvider } from '@/contexts/menu'

describe('<Header />', () => {
  it('should be render a component Header', () => {
    render(<Header />)

    expect(screen.getByRole('navigation')).toHaveClass('bg-black')
  })

  it('should be open and close Menu when clicked', () => {
    render(
      <MenuContextProvider>
        <Header />
      </MenuContextProvider>,
    )
    const button = screen.getByTestId('open-menu-button')
    const menu = screen.getByTestId('menu-lateral')
    expect(menu).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(button)
    expect(menu).toHaveAttribute('aria-hidden', 'false')
  })
})
