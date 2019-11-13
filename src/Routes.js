import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import App from './App';
import Todo from './pages/Todo';
import Form from './pages/Form';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true,
            },
            {
                ...About,
                path: '/about',
            },
            {
                ...Todo,
                path: '/Todo',
            },
            {
                ...Form,
                path: '/form',
            },
            {
                ...NotFound,
            },
        ],
    },
];
