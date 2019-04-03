import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

console.log('main.js', module.hot)

if (module.hot) {
  module.hot.accept()
}