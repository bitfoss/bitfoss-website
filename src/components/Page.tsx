import React from 'react';
import { Helmet } from "react-helmet";

interface PageProps {
    simple?: boolean;
    title: string;
    description?: string;
    children?: React.ReactNode;
    centerTitle?: boolean;
}

export const Page = (props: PageProps) => {
    return (
        <div>
            <Helmet>
                <title>Bitfoss - {props.title}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            {props.simple ? null : (
                <>
                    <h1 className={props.centerTitle ? "text-center" : "text-left"}>{props.title}</h1>
                </>
            )}
            {props.children}
        </div>
    );
};
