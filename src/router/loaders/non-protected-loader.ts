import { redirect } from 'react-router-dom';
import { localStorageUtil } from '../../utils/localStorageUtil';

export async function nonProtectedLoader() {
    const accessToken = localStorageUtil.getItem('accessToken');

    if (accessToken) {
        return redirect('/');
    }
    return null;
}
