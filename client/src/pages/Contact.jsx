export default function Contact()  {
    return (
        <div className="contact">
            <h1>Contact</h1>
                <div className="contact-grid">
                    <div className="contact-col 1">
                        <div className="contact-item">
                            <h2>Email</h2>
                            <div className="row-apart">
                                <h3>Personal</h3>
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
                                <h3>Grand Forge Games</h3>
                                <a
                                    href="mailto:ben.dutton@grandforgegames.com"
                                >
                                    ben.dutton@grandforgegames.com
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
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}