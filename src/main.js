import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes'


Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('jwt');
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/login')
      next('/login');
    else
      next();
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
