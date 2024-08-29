import { Link } from "react-router-dom";

import projects from '../projects';
import './GraphicDesign.css';


export default function GraphicDesign() {

    const filterProjects = projects.filter((project) => project.category === 'graphic-design');

    return(
        <main className='graphic-design-page'>
            <section className='graphic-design'>
                <div className='header'>
                    <h1>Graphic Design</h1>
                    <p>My skills as a graphic designer range from logo design, UI design and print layout.</p>
                </div>
                <section className='port-graphic'>
                    {filterProjects.map((project) => {
                        return(
                            <figure key={project.id} title={project.title}>
                                <Link to={`/${project.category}/${project.id}`} state={{project}}>
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