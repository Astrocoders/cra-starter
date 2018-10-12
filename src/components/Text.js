
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'

const Text = styled.span`
  color: ${props => props.color};
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: 160%;
  margin-top: ${props => props.marginTop || props.margin};
  margin-bottom: ${props => props.marginBottom || props.margin};
  margin-right: ${props => props.marginRight || props.margin};
  margin-left: ${props => props.marginLeft || props.margin};
  font-size: ${props => props.size};
  text-align: ${props => props.align};
  
  a {
    color: ${theme.colors.primary};
  }
`

Title.defaultProps = {
  align: 'inherit',
  color: theme.palette.black,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  size: '1.2em',
  weight: '400',
}

Title.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
}

export default Text