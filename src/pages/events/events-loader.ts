import { getEvents } from '../../api/event';

export async function eventsLoader() {
    const events = await getEvents();

    return events;
}
