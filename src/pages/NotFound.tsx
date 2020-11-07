import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const NotFound = () => {
    const location = useLocation();

    return (
        <div className="text-center">
            <p>Sorry, the page you're looking for does not exist.</p>
            <p>
                <span className="text-danger">{location.pathname}</span>
                <span className="text-secondary">{location.search}{location.hash}</span>
            </p>
            <p>Go to <NavLink to="/">Bitfoss.com</NavLink>.</p>
        </div>
    );
};
