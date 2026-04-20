export default function About()  {
    return (
        <div className="about">
            <h1>
                About
            </h1>
            <p>
                I am a full-stack developer with experience 
                creating web and mobile applications. 
                I am eager to learn new skills that will further 
                my ability to create the best user experience possible. 
            </p>
            <div className="about-grid">
                <div className="about-col 1">
                    <h1>Education</h1>
                    <div className="row">
                        <h2>B.S. in Computer Science</h2>
                        <p>Expected May 2026</p>
                    </div>
                    <div className="row">
                        <h3>Old Dominion University</h3>
                        <p>Norfolk, Virginia</p>
                    </div>
                    <p>GPA: 3.04</p>
                    <p>In-Major GPA: 3.70</p>
                    
                </div>
                <div className="about-col 2">
                    <h1>Experience</h1>
                    <div className="timeline">
                        <div className="timeline-item">
                            <h4>August 2025-Current</h4>
                            <div className="row text">
                                <h2>Web Developer</h2>
                                <p>at</p>
                                <h3>Grand Forge Games</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="about-col 3">
                    <h1>Skills</h1>
                    <h2>Languages</h2>
                    <ul>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                    <h2>Web Development</h2>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REST APIs</li>
                    </ul>
                    <h2>Databases</h2>
                    <ul>    
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Clever Cloud</li>
                    </ul>
                    <h2>Tools and Platforms</h2>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Docker</li>
                        <li>Render</li>
                        <li>Firebase</li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}