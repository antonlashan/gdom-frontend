import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 block w-full p-2.5"
                {...props}
            />
        </>
    );
};

export default Input;
