import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const buttonClasses = `w-full text-white hover:bg-${variant}-800 focus:ring-4 focus:outline-none focus:ring-${variant}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-${variant}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
