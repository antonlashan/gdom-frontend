import { IApiResponse } from '../interfaces/api';

export function fetchWrapper<T = unknown>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data = null,
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

    return fetch(url, requestOptions)
        .then((res) => handleResponse<T>(res))
        .catch((error) => {
            // Handle any network or fetch-related errors here.
            console.error('Fetch request failed:', error);
            throw error;
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
