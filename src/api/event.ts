import { fetchWrapper } from '.';
import { IEvent } from '../interfaces/event';

const API_URL = 'http://localhost:8080';

export const getEvents = async () => {
    const response = await fetchWrapper<IEvent[]>(`${API_URL}/api/events`, 'GET');

    return response;
};
