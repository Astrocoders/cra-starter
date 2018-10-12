import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Home from './Home'

afterEach(cleanup)

describe('Home page', () => {
  it('renders Header', () => {
    const { queryByTestId } = render(<Home />)
    expect(queryByTestId('HeaderWrapper')).toBeInTheDocument()
  })

  it('renders Header Title', () => {
    const { queryByTestId } = render(<Home />)
    expect(queryByTestId('HeaderTitle')).toBeInTheDocument()
  })

  it('renders Header Title text', () => {
    const { queryByText } = render(<Home />)
    expect(queryByText('Astrocoders CRA boilerplate')).toBeInTheDocument()
  })
})