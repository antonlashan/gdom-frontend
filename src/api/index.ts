import { IApiResponse } from '../interfaces/api';
import { localStorageUtil } from '../utils/localStorageUtil';

type TMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export function fetchWrapper<T = unknown>(
    url: string,
    method: TMethods,
    data: unknown = null,
    headers = {},
): Promise<T> {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json', // Default Content-Type
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    return fetch(`${process.env.REACT_APP_API_URL}/${url}`, requestOptions)
        .then((res) => handleResponse<T>(res))
        .catch((error) => {
            // Handle any network or fetch-related errors here.
            console.error('Fetch request failed:', error);
            throw error;
        });
}

export function fetchAuthWrapper<T = unknown>(url: string, method: TMethods, data: unknown = null, headers = {}) {
    return fetchWrapper<T>(url, method, data, {
        ...headers,
        'x-access-token': localStorageUtil.getItem('accessToken'),
    });
}

function handleResponse<T>(response: Response): Promise<T> {
    return response.json().then((data: IApiResponse<T>) => {
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data.data;
    });
}
