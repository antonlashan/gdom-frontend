import { redirect } from 'react-router-dom';

import { fakeAuthProvider } from '../../utils/auth';

export async function nonProtectedLoader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect('/');
    }
    return null;
}
