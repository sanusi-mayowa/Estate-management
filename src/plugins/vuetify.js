import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#E8F1F2",
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
