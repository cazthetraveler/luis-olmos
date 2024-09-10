// import { useLocation } from "react-router-dom";

// import './Project.css';

// export default function Project() {
//     const location = useLocation();
//     const {project} = location.state || {};

//     if (!project) {
//         return <h1>project not found :PP</h1>
//     }

//     return(
//         <main className='project-page'>
//             <section className='project'>
//                 <div className='header'>
//                     <h1>{project.title}</h1>
//                     <p>{project.description}</p>
//                 </div>
//                 <section className='project-images'>
//                     {project.image.map((image, index) => (
//                         <img key={index} src={image.src} alt={image.alt} className={image.class} loading='lazy' />
//                     ))}
//                 </section>
//             </section>
//         </main>
//     )
// }

import { useLocation } from "react-router-dom";
import "./Project.css";

export default function Project() {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <h1>Project not found :PP</h1>;
  }

  return (
    <main className="project-page">
      <section className="project">
        <div className="header">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        {project.video ? (
          <iframe src={project.video} width="640" height="480" allow="autoplay">
            fjaklfjdl
          </iframe>
        ) : (
          project.image.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.class}
              loading="lazy"
            />
          ))
        )}
      </section>
    </main>
  );
}
