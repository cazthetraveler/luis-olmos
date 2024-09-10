import { Link } from "react-router-dom";

import projects from "../projects";
import "./Photography.css";

export default function Photography() {
  const filterProjects = projects.filter(
    (project) => project.category === "photography"
  );

  return (
    <main className="photography-page">
      <section className="photography">
        <div className="header">
          <h1>Photography</h1>
          <p>
            My skills as a photographer from product photography to headshots,
            and also videography!
          </p>
        </div>
        <section className="port-photo">
          {filterProjects.map((project) => {
            return (
              <figure key={project.id} title={project.title}>
                <Link
                  to={`/${project.category}/${project.id}`}
                  state={{ project }}
                >
                  <img
                    title={project.title}
                    src={project.thumb.src}
                    alt={project.thumb.alt}
                    loading="lazy"
                  />
                </Link>
              </figure>
            );
          })}
        </section>
      </section>
    </main>
  );
}
