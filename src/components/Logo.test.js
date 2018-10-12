import React from 'react'
import { render } from 'react-testing-library'

import Logo from './Logo'

describe('Logo component', () => {
  it('should show the logo', () => {
    const { queryByTestId } = render(<Logo />)

    expect(queryByTestId('LogoImage')).toBeInTheDocument()
  })

  it('should have alt attr', () => {
    const { queryByAltText } = render(<Logo />)

    expect(queryByAltText('React Logo')).toBeInTheDocument()
  })
})