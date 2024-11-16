import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const ButtonBlue: React.FC<ButtonProps> = ({ children }) => (
    <button className="bg-primary hover:bg-primary-light text-neutral-white font-bold py-2 px-4 rounded">
        {children}
    </button>
);

const ButtonGreen: React.FC<ButtonProps> = ({ children }) => (
    <button className="bg-green-400 hover:bg-green-light text-neutral-white font-bold py-2 px-4 rounded">
        {children}
    </button>
);


export { ButtonBlue, ButtonGreen };
