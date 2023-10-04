import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { IEvent } from '../../interfaces/event';
import Table, { IColumn } from '../../components/table/Table';
import { PlaceBetModal } from './PlaceBetModal';

export const EventsPage = () => {
    const data = useLoaderData() as IEvent[];
    const [modalStatus, setModalStatus] = useState<{ open: boolean; data?: IEvent }>({ open: false });

    const columns: IColumn<IEvent>[] = [
        { header: 'ID', field: 'eventId', type: 'text' },
        { header: 'Name', field: 'eventName', type: 'text' },
        { header: 'Age', field: 'odds', type: 'text' },
        {
            header: 'Action',
            field: 'eventId',
            type: 'button',
            buttonLabel: 'Place Bet',
            onClick: (row) => {
                setModalStatus({ open: true, data: row });
            },
        },
    ];

    return (
        <>
            <Table data={data} columns={columns} />

            <PlaceBetModal
                open={modalStatus.open}
                event={modalStatus.data}
                onClose={(event) => setModalStatus({ open: false, data: event })}
            />
        </>
    );
};
