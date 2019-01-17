// core pages
import Home from '../content/home';
import About from '../content/about';

// main sections
import Orders from '../content/orders';


// note: nav, order, and true are optional and add a link to the default header
export const ROUTES = {
  HOME: {
    Component: Home,
    path: '/',
    linkTo: () => '/',
    default: true,
    nav: true,
    order: 1,
    label: 'Home',
  },
  ABOUT: {
    Component: About,
    path: '/about',
    linkTo: () => '/about',
    nav: true,
    order: 2,
    label: 'About',
  },
  ORDERS: {
    Component: Orders,
    path: '/orders',
    linkTo: () => '/orders',
    nav: true,
    order: 3,
    label: 'Orders',
  },
};
