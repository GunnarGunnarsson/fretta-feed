import Home from './pages/Home';
import Discover from './pages/Discover';

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home,
    exact: true
  },
  {
    path: '/search',
    name: 'SEARCH',
    component: Discover
  }
];

export default routes;
