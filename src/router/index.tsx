import { createBrowserRouter, redirect } from 'react-router-dom';

import { fakeAuthProvider } from '../utils/auth';

import { EventsPage } from '../pages/events/Events';
import { HomePage } from '../pages/home/Home';
import { LoginPage } from '../pages/login/Login';
import { loginAction } from '../pages/login/login-action';

import { BasicLayout } from '../layouts/basic-layout/BasicLayout';
import { AuthenticatedLayout } from '../layouts/authenticated-layout/AuthenticatedLayout';

import { protectedLoader } from './loaders/protected-loader';
import { nonProtectedLoader } from './loaders/non-protected-loader';
import { eventsLoader } from '../pages/events/events-loader';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: AuthenticatedLayout,
        errorElement: <div>Oops! There was an error.</div>, // @TODO need to create a 404 or error page
        children: [
            {
                index: true,
                loader: protectedLoader,
                Component: HomePage,
            },
            {
                path: 'events',
                loader: async (data) => {
                    return protectedLoader(data, eventsLoader);
                },
                Component: EventsPage,
            },
        ],
    },
    {
        path: '/login',
        Component: BasicLayout,
        children: [
            {
                index: true,
                action: loginAction,
                loader: nonProtectedLoader,
                Component: LoginPage,
            },
        ],
    },
    {
        path: '/logout',
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await fakeAuthProvider.signout();
            return redirect('/');
        },
    },
]);
