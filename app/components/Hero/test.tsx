import {render, screen} from '@testing-library/react'

import {Hero} from '.'

describe('<Hero />', () => {
    it('should render a hero', () => {
        const {container} = render(<Hero />)

        expect(screen.getByText(/js atelier/i))
    })
})