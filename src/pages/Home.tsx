import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../components/Page';

export const Home = () => {
    const firstSentence = "Bitfoss is all about free, open-source software projects, developed mostly for fun. ";

    return (
        <Page title="Welcome to Bitfoss!" simple description={firstSentence}>
            <div>
                <h4>What's Bitfoss all about?</h4>
                <p>
                    {firstSentence}
                    All projects are developed with the following mindset,
                    slightly inspired by the <a target="_blank" rel="noreferrer"  href="https://en.wikipedia.org/wiki/MoSCoW_method">MoSCoW method</a>.
                </p>
                <ul>
                    <li>It <b>must</b> be fun to implement</li>
                    <li>It <b>should</b> be challenging to implement</li>
                    <li>It <b>could</b> be useful for other people than yourself</li>
                    <li>It <b>won't</b> be perfect</li>
                </ul>
                <p>
                    Browse through the projects <NavLink to="/projects">here</NavLink>.
                </p>

                <h4>Who are the developers?</h4>
                <ul>
                    <li><a href="https://github.com/JessenMorten">Morten Jessen</a></li>
                </ul>
            </div>
        </Page>
    );
};
