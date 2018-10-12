import React from 'react'
import styled from 'styled-components'

import Logo from './components/Logo'

const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`

const Home = () => (
  <React.Fragment>
    <Header data-testid="HeaderWrapper">
      <Logo />
      <p data-testid="HeaderTitle">
        Astrocoders CRA boilerplate
      </p>
    </Header>
  </React.Fragment>
)

export default Home
