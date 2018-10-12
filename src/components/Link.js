import { Link as L } from '@reach/router'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../theme'

const Link = styled(L)`
  color: ${theme.palette.primary};
  font-weight: bold;
  line-height: 1.5;
  text-decoration: none;
`

Link.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Link

export const RawLink = styled(L)`
  text-decoration: none;
  color: inherit;
`