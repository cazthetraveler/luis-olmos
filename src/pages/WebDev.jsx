import { useState } from 'react';
import { Link } from "react-router-dom";

import projects from '../projects';
import './WebDev.css';


export default function WebDev() {

    const filterProjects = projects.filter((project) => project.category === 'web-development');

    return(
        <main className='web-development-page'>
            <section className='web-development'>
                <div className='header'>
                    <h1>Web Development</h1>
                    <p>My skills as a web developer range from full-stack developing.</p>
                </div>
                <section className='port-web'>
                    {filterProjects.map((project) => {
                        return(
                            <figure key={project.id} title={project.title}>
                                <Link to={`${project.link}`} target='_blank'>
                                    <img title={project.title} src={project.thumb.src} alt={project.thumb.alt} loading='lazy' />
                                </Link>
                            </figure>
                        )
                    })}
                </section>
            </section>
        </main>
    )
}