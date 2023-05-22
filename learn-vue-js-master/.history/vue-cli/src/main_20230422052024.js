import { VueElement, createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new VueElement({
    el:'#app',
    render: h => h(App),
})