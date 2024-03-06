import { createBrowserRouter } from 'react-router-dom';

// Import Route Constants

// Import Layouts
import Layout from '../Components/layout';

// Import Pages
import Menu from '../pages/user/menu';
import MultiplayerPage from '../pages/user/multiplayer';
import SoloplayerPage from '../pages/user/soloplayer';

import SignIn from '../pages/authentication/signin';

import Home from '../Components/home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Menu />,
            },
            {
                path: '/multiplayer',
                element: <MultiplayerPage />
            },
            {
                path: '/solo',
                element: <SoloplayerPage />
            },
            {
                path: '/leaderboard',
                element: <SoloplayerPage />
            },
            {
                path: '/config',
                element: <SoloplayerPage />
            },
            {
                path: '/about',
                element: <SoloplayerPage />
            },
            {
                path: '/room',
                element: <SoloplayerPage />
            },
        ]
    },
    {
        path: '/game',
        element: <Home />
    }
]);

export default routes;