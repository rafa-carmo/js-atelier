import { render, screen } from '@testing-library/react'

import { HobbieCard } from '.'

describe('<HobbieCard />', () => {
  it('should be render a component HobbieCard', () => {
    render(
      <HobbieCard
        title="Test"
        image={{ url: 'image.png', alt: 'image teste' }}
        description="description test"
      />,
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/test/i)
    expect(screen.getByText(/description test/i))
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'image teste')
  })

  it('should be put the title in alt if not setted', () => {
    render(
      <HobbieCard
        title="Test"
        image={{ url: 'image.png' }}
        description="description test"
      />,
    )

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test')
  })
})
