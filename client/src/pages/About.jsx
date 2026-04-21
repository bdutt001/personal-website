export default function About()  {
    return (
        <div className="about">
            <section className="section">
                <h1>
                    About
                </h1>
                <p>
                    I am a full-stack developer with experience
                    creating web and mobile applications.
                    I am eager to learn new skills that will further
                    my ability to create the best user experience possible.
                </p>
            </section>
            <div className="about-grid">
                <div className="about-col 1">
                    <h1>Education</h1>
                    <div className="education">
                        <div className="ed-item">
                            <div className="row">
                                <h2>B.S. in Computer Science</h2>
                                <p>Expected May 2026</p>
                            </div>
                            <div className="row">
                                <h3>Old Dominion University</h3>
                                <p>Norfolk, Virginia</p>
                            </div>
                            <div>
                                <p>GPA: 3.04</p>
                                <p>In-Major GPA: 3.70</p>
                            </div>
                        </div>
                         <div className="ed-item">
                            <div className="row">
                                <h2>Advanced Diploma</h2>
                                <p>May 2019</p>
                            </div>
                            <div className="row">
                                <h3>Western Branch High School</h3>
                                <p>Chesapeake, Virginia</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="about-col two">
                    <h1>Experience</h1>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="row">
                                <h2>Web Developer</h2>
                                <p>January 2026 - Current</p>
                            </div>
                            <div className="row">
                                <h2>Game Developer</h2>
                                <p>August 2025 - January 2026</p>
                            </div>
                            <h3>Grand Forge Games</h3>
                            <ul>
                                <li>
                                    <p>Sole developer of the official company website{" "}
                                        <a href="www.grandforgegames.com">
                                            GrandForgeGames.com
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Contributed to the development of{" "}
                                        <a href="www.grandforgegames.com">
                                            Project Forsaken
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-col 3">
                    <h1>Skills</h1>
                    <div className="skill-item">
                        <h2>Languages</h2>
                        <ul>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="skill-item">
                        <h2>Web & Mobile Development</h2>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Expo</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                    <div className="skill-item">
                        <h2>Databases & Data Tools</h2>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>Prisma</li>
                            <li>Clever Cloud</li>
                        </ul>
                    </div>
                    <div className="skill-item">
                        <h2>Developer Tools & Platforms</h2>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Docker</li>
                            <li>Render</li>
                            <li>Firebase</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                    <div className="skill-item">
                        <h2>Creative & Game Development Tools</h2>
                        <ul>
                            <li>Unreal Engine</li>
                            <li>Inkscape</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}