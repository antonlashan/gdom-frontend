import { fetchAuthWrapper } from '.';
import { IEvent } from '../interfaces/event';

export const getEvents = async () => {
    const response = await fetchAuthWrapper<IEvent[]>('api/events', 'GET');

    return response;
};
