import React from 'react';

interface PageProps {
    title: string;
    children?: React.ReactNode;
    centerTitle?: boolean;
}

export const Page = (props: PageProps) => {
    return (
        <div className="bg-content rounded-lg p-3 shadow">
            <h1 className={props.centerTitle ? "text-center" : ""}>{props.title}</h1>
            <hr />
            {props.children}
        </div>
    );
};
