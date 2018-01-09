import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Vuet from 'vuet'

import Index from './views/index/Index.vue'

Vue
  .use(Router)
  .use(Vuex)
  .use(Vuet)

const App = {
  render: (h) => h('router-view', {
    attrs: {
      id: 'app'
    }
  })
}

export function createApp () {
  const router = new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Index }
    ]
  })
  const vuet = new Vuet()
  vuet.addModules('test', {
    data () {
      return {
        count: 100
      }
    },
    plus () {
      this.count++
    }
  })  

  const app = new Vue({
    router,
    vuet,
    render: h => h(App)
  })

  return { app, router, vuet }
}