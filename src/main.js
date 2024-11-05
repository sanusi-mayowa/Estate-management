import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
import "bootstrap-icons/font/bootstrap-icons.css";
// import "boxicons/css/boxicons.min.css";


registerPlugins(app)

app.mount('#app')
