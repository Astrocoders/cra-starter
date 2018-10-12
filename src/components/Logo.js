import styled, {keyframes} from 'styled-components'
import logo from '../assets/logo.svg'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export default styled.img.attrs({src: logo, alt: 'React Logo',})`
  animation: ${spin} infinite 4s linear;
  height: 40vmin;
`