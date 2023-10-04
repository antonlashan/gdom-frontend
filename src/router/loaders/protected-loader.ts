import { LoaderFunctionArgs, redirect } from 'react-router-dom';

import { localStorageUtil } from '../../utils/localStorageUtil';

export async function protectedLoader(args: LoaderFunctionArgs, callback?: (args: LoaderFunctionArgs) => void) {
    const accessToken = localStorageUtil.getItem('accessToken');

    if (!accessToken) {
        let params = new URLSearchParams();
        params.set('from', new URL(args.request.url).pathname);
        return redirect('/login?' + params.toString());
    }

    if (callback) {
        return await callback?.(args);
    }

    return null;
}
