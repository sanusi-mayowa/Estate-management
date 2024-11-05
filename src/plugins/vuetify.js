import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#0b68c0",
        },
        variables: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
