import { AuthProtector } from '../components/AuthProtector/AuthProtector'

import Layout from '../components/Layout/Layout'
import Error from '../pages/Error/Error'
import Main from '../pages/Main/Main'
import Movies from '../pages/Movies/Movies'
import Profile from '../pages/Profile/Profile'
import SavedMovies from '../pages/SavedMovies/SavedMovies'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

export const routerConfig = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                element: <AuthProtector />,
                children: [
                    {
                        path: '/movies',
                        element: <Movies />,
                    },
                    {
                        path: '/saved-movies',
                        element: <SavedMovies />,
                    },
                    {
                        path: '/profile',
                        element: <Profile />,
                    },
                ],
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
]
