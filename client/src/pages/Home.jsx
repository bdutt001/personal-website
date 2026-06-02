import Photo from "../assets/Ben_D.png"
import Terminal from "../components/Terminal";

export default function Home()  {
    return (
        
        <div className="landing">
            <div className="home">
            
                <div className="home right">
                    <Terminal></Terminal>
                </div>
                <div className="home left">
                    <div className="name-and-bio">

                        <img src={Photo} className="photo"/>
                        <h2>Benjamin Dutton</h2>
                        <p>Chesapeake, Virginia</p>
                        <div className="row apart">
                            
                            <p>bendutton9@gmail.com</p>
                        </div>
                        {/* <div className="buttons">
                            <div className="row">
                                <a
                                    href="/#/about"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                >
                                    About
                                </a>
                                <a
                                    href="/#/projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                >
                                    Projects
                                </a>
                            </div>
                            
                            </div>*/}
                            <a
                                href="https://www.linkedin.com/in/benjamin-dutton-odu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button linkedin"
                            >
                            LinkedIn
                            </a>
                    
            
                    </div>
                </div>
            
            </div>
              
        </div>
          );
}