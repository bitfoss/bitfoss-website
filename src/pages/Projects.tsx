import React from 'react';
import { Page } from '../components/Page';

interface ProjectItemProps {
    title: string;
    description: string;
    imgSrc?: string;
    sourceUrl?: string;
    demoUrl?: string;
}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="m-3 rounded-lg shadow bg-base-one p-3">
                <img src={props.imgSrc} alt={props.title} className="rounded-lg shadow w-100 mb-3" />
                <h4>{props.title}</h4>
                <p className="mb-0" style={{ height: 75 }}>{props.description}</p>
                {!props.demoUrl && !props.sourceUrl ? null : (
                    <div className="pt-1 my-3 rounded-lg bg-gradient" />
                )}
                {!props.demoUrl ? null : <small><a target="_blank" rel="noreferrer" href={props.demoUrl}>View</a></small>}
                {!!props.sourceUrl && !!props.demoUrl ? <span className="text-theme-one">&nbsp;|&nbsp;</span> : null}
                {!props.sourceUrl ? null : <small><a target="_blank" rel="noreferrer" href={props.sourceUrl}>Source code</a></small>}
            </div>
        </div>
    );
};

export const Projects = () => {
    const projects: ProjectItemProps[] = [
        {
            imgSrc: "https://via.placeholder.com/150",
            title: "Bitfoss.com",
            description: "The website you're currently viewing.",
            demoUrl: "https://www.bitfoss.com/",
            sourceUrl: "https://github.com/bitfoss/bitfoss-website"
        },
        {
            imgSrc: "/images/pulse.png",
            title: "Pulse",
            description: "See the lastest emergency information provided by the Danish Emergency Management Agency.",
            demoUrl: "http://pulse.stackoverflow.dk/"
        }
    ];

    return (
        <Page title="Projects">
            <div className="row justify-content-left no-gutters">
                {projects.map(p => <ProjectItem
                    key={p.title}
                    imgSrc={p.imgSrc}
                    title={p.title}
                    description={p.description}
                    demoUrl={p.demoUrl}
                    sourceUrl={p.sourceUrl}
                />)}
            </div>
        </Page>
    );
};
