import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import {firebase} from "@nativescript/firebase";
import routes from './routes'
import store from './store/store.js'

Vue.prototype.$routes = routes;

firebase.init({}).then(() => console.log('firebase init')).catch(err => console.log(err))

Vue.use(VueDevtools)
if(TNS_ENV !== 'production') {
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
	store,
	render: h => h('frame', [h(App)])
}).$start()
