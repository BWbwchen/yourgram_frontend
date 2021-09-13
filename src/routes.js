import Login from './components/Login.vue';
import MainPage from './components/MainPage.vue';
import CreatePost from './components/CreatePost.vue';

export const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/createPost',
    component: CreatePost,
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