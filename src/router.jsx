import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./users/layout/UserLayout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Services from "./users/views/Services";
// import i18next from "i18next";

// const lang = i18next.language;

const router = createBrowserRouter([
    {
        path: `/`,
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Services />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router