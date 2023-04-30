import { render, screen } from '@testing-library/react'
import { PostCard } from '.'

describe('<PostCard />', () => {
  it('should be render the component PostCard', () => {
    render(
      <PostCard
        title="Post teste"
        shortDescription="descrição deste post"
        date={new Date(2023, 1, 20)}
        image="image.png"
      />,
    )

    expect(screen.getByText('20 de fevereiro')).toHaveAttribute(
      'datetime',
      '2023-00-20',
    )
    expect(screen.getByText('descrição deste post')).toBeInTheDocument()
    // expect(screen.getByRole('img')).toHaveAttribute('alt', 'Post teste')
  })
})
