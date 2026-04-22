export default function Contact()  {
    return (
        <div className="contact">
            <h1>Contact</h1>
                <div className="contact-grid">
                    <div className="contact-col 1">
                        <div className="contact-item">
                            <h2>Email</h2>
                            <div className="row-apart">
                                <h3>Personal:</h3>
                                <div className="row">
                                    <p>Preferred</p>
                                    <a
                                        href="mailto:bendutton9@gmail.com"
                                    >
                                        bendutton9@gmail.com
                                    </a>
                        
                                </div>
                            </div>
                            <div className="row-apart">
                                <h3>School:</h3>
                                <a
                                    href="mailto:bdutt001@odu.edu"
                                >
                                    bdutt001@odu.edu
                                </a>
                            </div>
                            <div className="row-apart">
                                <h3>Grand Forge Games:</h3>
                                <a
                                    href="mailto:ben.dutton@grandforgegames.com"
                                >
                                    ben.dutton@grandforgegames.com
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <h2>Phone</h2>
                            <div className="row-apart">
                                <h3>Mobile:</h3>
                                <a
                                    href="tel+17575674771"
                                >
                                    (757) 567-4771
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-col 2">
                        <div className="contact-item">
                            <h2>Platforms</h2>
                            <div className="row">
                                <a
                                    href="https://github.com/bdutt001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="www.linkedin.com/in/benjamin-dutton-odu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                >
                                    Indeed
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}