import { useState } from "react";

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "GrandForgeGames.com",
            type: "Website",
            organization: "Grand Forge Games",
            descriptor: "Official Website",
            team: "solo",
            teamSize: 1,
            status: "ongoing",
            madeWith: [
                "React",
                "TypeScript",
                "GitHub",
                "Inkscape (Logo Design)"
            ],
            description: [
                "The official company website for Grand Forge Games, an independent game studio based in Yorktown, Virginia. It showcases the Grand Forge Games brand, team members, and projects. Users can see content for upcoming games, including slideshows of in-game screenshots, concept art, and other assets. Users can also download playtests and give feedback.",
                "The visual design is cohesive and responsive, ensuring usability across devices.",
            ],
            links: [
                {text: "View Site", url: "https://grandforgegames.com"},
                {text: "GitHub Repo", url: "https://github.com/bdutt001/grandforgegames.git"},
            ]
        },
        {
            id: 2,
            title: "MingleMap",
            type: "Mobile Application",
            organization: "Old Dominion University",
            descriptor: "CS410/411 Capstone Project",
            team: "team",
            teamSize: 8,
            status: "completed",
            madeWith: [
                "React",
                "TypeScript",
                "Expo",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Prisma",
                "GitHub"
            ],
            description: [
                "MingleMap is a mobile application that helps people form real-life social connections in nearby public spaces by matching users based on proximity and shared interests.",
                "Users only see others who are nearby, reducing endless scrolling and encouraging in-person interaction. Each user can set their visibility and select up to 10 interests from a predefined list to guide conversations. Profiles are ranked based on shared interests, prioritizing more relevant matches. Conversations are temporary and automatically disappear once users leave a shared location, reinforcing real-world engagement.",
                "Users can browse nearby locations, view how many people are present, and see venue details such as category, rating, events, and exclusive offers for MingleMap users.",
                "Safety features include user reporting, moderation review, and account bans for inappropriate behavior."
            ],
            links: [
                {text: "View Demo", url: "https://github.com/bdutt001/f25-Iron.git"},
                {text: "GitHub Repo", url: "https://github.com/bdutt001/f25-Iron.git"},
                {text: "Documentation", url: "https://github.com/bdutt001/f25-Iron.git"},
            ]
        },
        {
            id: 5,
            title: "Employee Monitoring Software",
            type: "Website",
            organization: "Old Dominion University",
            descriptor: "COMM305 Literature Review Presentation",
            team: "solo",
            teamSize: 1,
            status: "completed",
            madeWith: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "Render",
                "PostrgreSQL",
                "Clever Cloud",
                "GitHub"
            ],
            description: [
                "A full-stack web application that presents a literature review on employee monitoring software.",
                "Features include tracking session and global activity, including actions (mouse movements and clicks) and idle time.",
            ],
            links: [
                {text: "View Site", url: "https://bdutt001.github.io/ems-presentation/"},
                {text: "GitHub Repo", url: "https://github.com/bdutt001/ems-presentation.git"}
            ]
        },
        {
            id: 3,
            title: "Course Advising Portal",
            type: "Web Application",
            organization: "Old Dominion University",
            descriptor: "CS418 Semester Project",
            team: "solo",
            teamSize: 1,
            status: "ongoing",
            madeWith: [
                "React",
                "JavaScript",
                "Firebase",
                "Node.js",
                "Express",
                "Render",
                "MySQL",
                "Clever Cloud",
                "GitHub"
            ],
            description: [
                "A full-stack web application that allows students to create, submit, and manage semester course plans, with advisor approval workflows.",
                "Features include email verification on signup, two-factor authentication on login, password encryption, password reset, conditional submission based on course selection rules, and conditional editing based on approval status."
            ],
            links: [
                {text: "View Site", url: "https://course-advising-a2b6e.web.app/login"},
                {text: "GitHub Repo", url: "https://github.com/bdutt001/cs418518-s26.git"},
            ]
        },
        {
            id: 4,
            title: "Project Forsaken",
            type: "PC Game",
            organization: "Grand Forge Games",
            descriptor: "Studio Game Project",
            team: "team",
            teamSize: 13,
            status: "ongoing",
            madeWith: [
                "Unreal Engine 5.7",
                "C++",
                "Diversion",
                "Maya",
            ],
            description: [
                "Forsaken is a single-player, open-world action RPG centered around visceral combat, exploration, and meaningful player choice."
            ],
            links: [
                {text: "View Site", url: "https://grandforgegames.com/forsaken"},
            ]
        },
        
    ];

    const [filters, setFilters] = useState({
        organization: "all",
        team: "all",
        status: "all"
    });

    const filteredProjects = projects.filter(project => {
        return (
            (filters.organization === "all" || project.organization === filters.organization) &&
            (filters.team === "all" || project.team === filters.team) &&
            (filters.status === "all" || project.status === filters.status)
        );
    });

    return (
        <div>
            <div className="projects">
                <h1>Projects</h1>

                {/* FILTERS (no layout classnames changed) */}
                <div className="row">
                    <select onChange={(e) => setFilters({ ...filters, organization: e.target.value })}>
                        <option value="all">All Organizations</option>
                        <option value="Grand Forge Games">Grand Forge Games</option>
                        <option value="Old Dominion University">Old Dominion University</option>
                    </select>

                    <select onChange={(e) => setFilters({ ...filters, team: e.target.value })}>
                        <option value="all">All Work Types</option>
                        <option value="solo">Solo</option>
                        <option value="team">Team</option>
                    </select>

                    <select onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                        <option value="all">All Statuses</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* PROJECTS */}
                {filteredProjects.map((project) => (
                    <div className="project" key={project.id}>
                        <div className="project-header">
                            <div className="col">
                                <h2>{project.title}</h2>
                                <div className="row">
                                    <h3>{project.organization}</h3>
                                    <p>{project.descriptor}</p>
                                </div>
                            </div>

                            <div className="row">
                                <p className="tag">{project.type}</p>
                                <p className="tag">
                                    {project.team === "solo" ? "Solo" : `Team (${project.teamSize})`}
                                </p>
                                <p className={`tag ${project.status === "ongoing" ? "ongoing" : ""}`}>
                                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                                </p>
                            </div>
                        </div>

                        {project.description.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}

                        {project.links && project.links.length > 0 && (
                            <div className="row">
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-button"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}

                        <div className="col list">
                            <h4>Made With:</h4>
                            <ul className="made-with">
                                {project.madeWith.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>
    );
}