import { fetchWrapper } from '.';
import { IEvent } from '../interfaces/event';

export const getEvents = async () => {
    const response = await fetchWrapper<IEvent[]>('api/events', 'GET');

    return response;
};
