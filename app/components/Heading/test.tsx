import {render, screen} from '@testing-library/react'
import { Heading } from '.'

describe("<Heading />", () => {
    it("should be render a component Heading", () => {
        render(<Heading>Teste</Heading>)

        expect(screen.getByRole("heading", {name: /teste/i}))
    })
})