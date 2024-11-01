import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Actions from "./components/Actions";
import Runs from "./components/Runs";
import Issues from "./components/Issues";
import Plugins from "./components/Plugins";
import Settings from "./components/Settings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Actions />,
            },
            {
                path: '/runs',
                element: <Runs />
            },
            {
                path: '/issues',
                element: <Issues />
            },
            {
                path: '/plugins',
                element: <Plugins />
            },
            {
                path: '/settings',
                element: <Settings />
            },
        ]
    }
]);

export default router;
