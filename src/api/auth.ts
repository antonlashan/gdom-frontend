import { fetchWrapper } from '.';
import { IAuth } from '../interfaces/auth';

export const signIn = async (email: string, password: string) => {
    const response = await fetchWrapper<IAuth>('api/auth/signin', 'POST', { email, password });

    return response;
};
