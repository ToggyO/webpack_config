import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import App from './App';
import Todo from './pages/Todo';

export default [
    {
        component: App,
        routes: [
            {
                component: Home,
                path: '/',
                exact: true,
            },
            {
                component: About,
                path: '/about',
            },
            {
                component: Todo,
                path: '/Todo',
            },
            {
                component: NotFound,
            },
        ],
    },
];
