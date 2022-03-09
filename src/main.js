import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, rainbowDirective } from './directives'
import './styles/styles.css'

const app = createApp(App)

app.directive('rainbow', rainbowDirective)
app.directive('focus', focusDirective)

app.use(router)
app.use(store)

app.mount('#app')
