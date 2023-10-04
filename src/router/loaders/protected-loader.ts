import { LoaderFunctionArgs, redirect } from 'react-router-dom';

import { fakeAuthProvider } from '../../utils/auth';

export async function protectedLoader(args: LoaderFunctionArgs, callback?: (args: LoaderFunctionArgs) => void) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set('from', new URL(args.request.url).pathname);
        return redirect('/login?' + params.toString());
    }

    if (callback) {
        return await callback?.(args);
    }

    return null;
}
