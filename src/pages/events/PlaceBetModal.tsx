import React, { FC, useState } from 'react';

import { IEvent } from '../../interfaces/event';
import Modal from '../../components/modal/Modal';
import Alert from '../../components/alert/Alert';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

interface IPlaceBetModalProps {
    open: boolean;
    event?: IEvent;
    onClose: (event?: IEvent) => void;
}
export const PlaceBetModal: FC<IPlaceBetModalProps> = ({ open, event, onClose }) => {
    const [bet, setBet] = useState<string>('');
    const [save, setSave] = useState(false);
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        setSave(true);
    };

    return (
        <Modal
            isOpen={open}
            onClose={() => {
                setBet('');
                setSave(false);
                onClose(event);
            }}
        >
            <h3 className="mb-4 text-lg font-medium text-gray-900">Place bet for {event?.eventName}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <Input
                        type="number"
                        name="bet"
                        value={bet}
                        onChange={(e) => setBet(e.target.value)}
                        placeholder="10"
                        required
                    />
                </div>

                <Button type="submit">Bet</Button>

                {save && <Alert type="success" message="Bet placed successfully!" />}
            </form>
        </Modal>
    );
};
