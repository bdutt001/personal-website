import Terminal from "../components/Terminal";

import Photo from "../assets/Ben_D.png";

import PinIcon from "../assets/pin.svg";
import CapIcon from "../assets/cap.svg";

import EmailIcon from "../assets/email.svg"
import EmailIconHover from "../assets/email-hover.svg"
import LinkedinIcon from "../assets/linkedin.svg";
import LinkedinIconHover from "../assets/linkedin-hover.svg";
import GithubIcon from "../assets/github.svg";
import GithubIconHover from "../assets/github-hover.svg";


export default function Home()  {
    return (
        
        <div className="landing">
            <div className="home">
            
                <div className="home right">
                    <Terminal></Terminal>
                </div>
                <div className="home left">
                    <div className="name-and-bio">

                        <div className="name-and-photo">
                            <img src={Photo} className="photo"/>
                            <div className="name-and-title">
                                <h2>Benjamin Dutton</h2>
                                <div className="job-row">
                                    <p>Software Engineer at</p>
                                    <a href="https://wrsystems.com/">
                                        WR Systems
                                    </a>
                                </div>
                                <div className="row-center">
                                    <p>B.S. in Computer Science</p>
                                </div>
                            </div>
                            {/* <div className="row-center">
                                    <a href="#about">
                                        More
                                    </a>
                            </div> */}
                        </div>
                        {/* <div className="description">
                            <div className="bio-details">
                                <div className="detail">
                                    <img src={CapIcon} className="icon inline"/>
                                    <img src={PinIcon} className="icon inline"/>
                                </div>
                                <div className="detail">
                                    <p>B.S. in Computer Science</p>
                                    <p>Chesapeake, Virginia</p>
                                </div>
                            </div>
                            
                        </div> */}
                        <div className="row-center">
                            <a
                                href="mailto:bendutton9@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button email"
                            >
                                <div className="icon-wrapper">
                                    <img src={EmailIcon} className="icon base"/>
                                    <img src={EmailIconHover} className="icon hover"/>
                                </div>
                                <span>Email</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/benjamin-dutton-odu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button linkedin"
                            >
                                <div className="icon-wrapper">
                                    <img src={LinkedinIcon} className="icon base"/>
                                    <img src={LinkedinIconHover} className="icon hover"/>
                                </div>
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/bdutt001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button github"
                            >
                                <div className="icon-wrapper">
                                    <img src={GithubIcon} className="icon base"/>
                                    <img src={GithubIconHover} className="icon hover"/>
                                </div>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
              
        </div>
          );
}