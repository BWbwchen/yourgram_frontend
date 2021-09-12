import Login from './components/Login.vue';
import MainPage from './components/MainPage.vue';

export const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    components: {
      default: MainPage,
    }
  },
  {
    path: '*',
    redirect: '/',
  }
];