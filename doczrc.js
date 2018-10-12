import doczPluginNetlify from 'docz-plugin-netlify'
import { css } from 'docz-plugin-css'

export default {
  title: 'Pismo',
  description: 'Pismo UI documentation',
  themeConfig: {
    colors: {
      primary: '#F37A21',
    },
  },
  plugins: [doczPluginNetlify(), css()],
}