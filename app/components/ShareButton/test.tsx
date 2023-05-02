import { render, screen } from '@testing-library/react'
import { ShareButton } from '.'

describe('<ShareButton />', () => {
  it('should be render the component ShareButton for whatsapp', () => {
    render(<ShareButton type="whatsapp" url="" />)

    expect(screen.getByText('WhatsApp')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp')).toHaveClass('bg-lime-500')
  })
  it('should be render the component ShareButton for Facebook', () => {
    render(<ShareButton type="facebook" url="" />)

    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toHaveClass('bg-blue-500')
  })
  it('should be render the component ShareButton for Twitter', () => {
    render(<ShareButton type="twitter" url="" />)

    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toHaveClass('bg-sky-500')
  })
})
