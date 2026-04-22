import Photo from "../assets/Ben_D.png"

export default function Home()  {
    return (
        <div className="home">
            <div className="name-and-bio">
                <h1>Benjamin Dutton</h1>
                <p className="bio">
                    Full-stack developer from Chesapeake, Virginia,
                    building web and mobile applications with
                    intuitive frontend designs and
                    optimized backend architectures.
                </p>
                <div className="buttons">
                    <div className="row">
                        <a
                            href="/about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-button"
                        >
                            Education & Experience
                        </a>
                        <a
                            href="/projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-button"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
            <img src={Photo}/>
        </div>
    );
}