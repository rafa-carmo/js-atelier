import { render, screen } from '@testing-library/react'

import { PortfolioCard } from '.'

describe('<PortfolioCard />', () => {
  it('should be render a component Portfolio Card', () => {
    render(
      <PortfolioCard
        title="Title"
        description="mini description test"
        image={{ url: 'image.png', alt: 'alternative text' }}
      />,
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/title/i)
    expect(screen.getByText(/mini description test/i))
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'alternative text')
  })

  it('should be put the title in alt if not setted', () => {
    render(
      <PortfolioCard
        title="Test"
        image={{ url: 'image.png' }}
        description="description test"
      />,
    )

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test')
  })
})
