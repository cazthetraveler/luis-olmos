import './Home.css';

export default function Home() {
    return(
        <main className='home-page'>
            <section className='home'>
                <img className='img-me' src='/images/luis3.jpg' alt='picture of me in my snoopy sweater.' />
                <section className='about-me'>
                    <h1>Welcome!</h1>
                    <p>Hi, my name is Luis Olmos and I am a graphic designer, web developer, and photographer!</p>
                    <p>I&apos;ve attended and graduated from Del Rio High School in 2019, where I first was introduced to graphic design. After a year into junior college, I decided to go to Texas State Technical College, where I then received my Associate&apos;s of Applied Science in Digital Media Design in 2022. Here is where I got my start into photography and videography skills, and an introduction to web development. A year after graduating, I decided to learn more about web development, so I enrolled and finished a 6-month bootcamp course from the University of Texas at San Antonio. I completed the course in February 2024, where I received my certificate of completion.</p>
                    <p>Currently, I am working as a graphic designer at Ventura Promotional Products.</p>
                </section>
                <section className='skills'>
                    <div>
                        <h2>Graphic Design</h2>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe InDesign</li>
                            <li>Adobe XD</li>
                            <li>Logo Design and Brand Identity</li>
                            <li>UI Design</li>
                            <li>Print Layout</li>
                            <li>Typography</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Photography</h2>
                        <ul>
                            <li>Adobe Lightroom</li>
                            <li>Adobe Premiere Pro</li>
                            <li>Manual Mode</li>
                            <li>RAW Shooting</li>
                            <li>Photo Editing</li>
                            <li>Videography</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Web Development</h2>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>HTML, CSS and JavaScript</li>
                            <li>JQuery</li>
                            <li>Web APIs</li>
                            <li>ExpressJs and NodeJs</li>
                            <li>MySQL and NoSQL</li>
                            <li>MongoDB and Mongoose</li>
                            <li>React</li>
                            <li>MERN Stack</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    )
}