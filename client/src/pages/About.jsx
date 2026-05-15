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
                <div className="about-col">
                    <h1>Education</h1>
                    <div className="education">
                        <div className="ed-item">
                            <div className="row-apart">
                                <h2>B.S. in Computer Science</h2>
                                <p className="date">May 2026</p>
                            </div>
                            <div className="row-apart">
                                <h3>Old Dominion University</h3>
                                <p>Norfolk, Virginia</p>
                            </div>
                            <div>
                                <p>GPA: 3.04</p>
                                <p>In-Major GPA: 3.70</p>
                            </div>
                        </div>
                         <div className="ed-item">
                            <div className="row-apart">
                                <h2>Advanced Diploma</h2>
                                <p className="date">May 2019</p>
                            </div>
                            <div className="row-apart">
                                <h3>Western Branch High School</h3>
                                <p>Chesapeake, Virginia</p>
                            </div>
                            <p>GPA: 4.67</p>
                        </div>
                    </div>
                    
                </div>
                <div className="about-col 2">
                    <h1>Experience</h1>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="row-apart">
                                <h2>Web Developer</h2>
                                <p className="date">January 2026 - Current</p>
                            </div>
                            <h3>Grand Forge Games</h3>
                            <p>Sole designer and developer of the official company website{" "}
                                <a href="www.grandforgegames.com">
                                    GrandForgeGames.com
                                </a>
                            </p>
                            <h3 style={{color: "#9ca3af"}}>Responsibilities</h3>
                            <ul>
                                <li>
                                    Create an intutive and cohesive visual design that reflects the brand
                                </li>
                                <li>
                                    Implement interactive UI elements including animation, hero banners, and dynamic content sections
                                </li>
                                <li>
                                    Build scalable component architecture for team members and projects using React
                                </li>
                                <li>
                                    Ensure website responsiveness across various devices and browsers using modern CSS and media queries
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div className="timeline-item">
                            <div className="row-apart">
                                <h2>Game Developer</h2>
                                <p className="date">August 2025 - January 2026</p>
                            </div>

                            <h3>Grand Forge Games</h3>
                            <p>
                                Programmer for{" "}
                                <a href="www.grandforgegames.com">
                                    Project Forsaken
                                </a>
                            </p>
                            <h3 style={{color: "#9ca3af"}}>Responsibilities</h3>
                            <ul>
                                <li>
                                    Implement and debug game mechanics using Unreal Engine blueprints
                                </li>
                                <li>
                                    Collaborate with a team using Diversion for version control
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-col 3">
                    <div className="row-apart">
                        <h1>Skills</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="skill-item">
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>
                                <div className="row-apart">
                                    <p>Java</p>
                                    <p>9</p>
                                </div>
                            </li>
                            <li>
                                <div className="row-apart">
                                    <p>C++</p>
                                    <p>7</p>
                                </div>
                            </li>
                            
                            <li>
                                <div className="row-apart">
                                    <p>Python</p>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <div className="row-apart">
                                    <p>JavaScript</p>
                                    <p>2</p>
                                </div>
                            </li>
                            <li>
                                <div className="row-apart">
                                    <p>TypeScript</p>
                                    <p>1</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-item">
                        <h2>Web & Mobile Development</h2>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Frontend</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>HTML</p>
                                        <p>3</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>CSS</p>
                                        <p>3</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>React</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Backend</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>Node.js</p>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Express</p>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Rest APIs</p>
                                        <p>{"< "}1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Mobile</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>Expo</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h2>Databases & Data Tools</h2>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Databases</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>PostgreSQL</p>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>MySQL</p>
                                        <p>{"< "}1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>ORM</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>Prisma</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h2>Developer Tools</h2>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Version Control</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>GitHub</p>
                                        <p>6</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Git</p>
                                        <p>4</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Containerization</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>Docker</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Hosting</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>GitHub Pages</p>
                                        <p>3</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Firebase</p>
                                        <p>{"< "}1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Render</p>
                                        <p>{"< "}1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Clever Cloud</p>
                                        <p>{"< "}1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="skill-item">
                        <h2>Project Management</h2>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Methodologies</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>Agile (Scrum)</p>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Sprint planning</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-sub-item">
                            <h3 style={{color: "#9ca3af"}}>Task Management</h3>
                            <ul>
                                <li>
                                    <div className="row-apart">
                                        <p>GitHub Issues</p>
                                        <p>2</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="row-apart">
                                        <p>Trello</p>
                                        <p>1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h2>Game Development</h2>
                        <ul>
                            <li>
                                <div className="row-apart">
                                    <p>Unreal Engine</p>
                                    <p>{"< "}1</p>
                                </div>
                            </li>
                            <li>
                                <div className="row-apart">
                                    <p>Diversion</p>
                                    <p>{"< "}1</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}