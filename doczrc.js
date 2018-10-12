import doczPluginNetlify from 'docz-plugin-netlify'
import { css } from 'docz-plugin-css'

import theme from './src/theme'

export default {
  title: 'CRA Starter',
  description: 'CRA Starter UI documentation',
  themeConfig: {
    colors: {
      primary: theme.palette.primary,
    },
  },
  plugins: [doczPluginNetlify(), css()],
}