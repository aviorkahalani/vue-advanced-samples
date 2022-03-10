import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, rainbowDirective, customOnDirective } from './directives'
import './styles/styles.css'

const app = createApp(App)

// in Vue3 filters are deprecated and instead we need to use computed to get the same behavior.
// one way to make a computed globally is by app.config.globalProperties
app.config.globalProperties.$filters = {
  currencyUSD(amount) {
    // look implementation inside car-preview.vue
    return '$' + amount
  },
}

app.directive('rainbow', rainbowDirective)
app.directive('focus', focusDirective)
app.directive('custom-on', customOnDirective)

app.use(router)
app.use(store)

app.mount('#app')
