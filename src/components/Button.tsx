import React from 'react';

interface ButtonProps {
    className?: string;
    onClick: () => void;
    text: string;
}

export const Button = (props: ButtonProps) => {

    return <button
        onClick={props.onClick}
        className={props.className}>{props.text}</button>
};
