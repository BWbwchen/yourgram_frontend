import App from './App.vue';
//import Login from './components/Login.vue';
import MainPage from './components/MainPage.vue';

export const routes = [
  {
    path: '/login',
    component: MainPage,
  },
  {
    path: '/',
    components: {
      default: App,
    }
  },
  {
    path: '*',
    redirect: '/',
  }
];