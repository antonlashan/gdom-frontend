import { LoaderFunctionArgs, redirect } from 'react-router-dom';

import { signIn } from '../../api/auth';
import { localStorageUtil } from '../../utils/localStorageUtil';

export async function loginAction({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    // Validate our form inputs and return validation errors via useActionData()
    if (!email) {
        return {
            error: 'You must provide a email to log in',
        };
    }

    if (!password) {
        return {
            error: 'You must provide a password to log in',
        };
    }

    // Sign in and redirect to the proper destination if successful.
    try {
        const res = await signIn(email, password);

        localStorageUtil.setItem('accessToken', res.accessToken);
    } catch (error) {
        // Unused as of now but this is how you would handle invalid
        // email/password combinations - just like validating the inputs
        // above
        return {
            error: 'Invalid login attempt',
        };
    }

    const redirectTo = formData.get('redirectTo') as string | null;
    return redirect(redirectTo || '/');
}
