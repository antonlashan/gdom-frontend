import React from 'react';

interface IAlertProps {
    type: 'success' | 'warning' | 'error';
    message: string;
}

const Alert: React.FC<IAlertProps> = ({ type, message }) => {
    let alertClass = '';

    switch (type) {
        case 'success':
            alertClass = 'text-green-800 bg-green-50';
            break;
        case 'warning':
            alertClass = 'text-yellow-800 bg-yellow-50';
            break;
        case 'error':
            alertClass = 'text-red-800 bg-red-50';
            break;
        default:
            alertClass = '';
    }

    return (
        <div className={`p-4 mb-4 text-sm rounded-lg ${alertClass}`} role="alert">
            <span className="font-medium">{message}</span>
        </div>
    );
};

export default Alert;
