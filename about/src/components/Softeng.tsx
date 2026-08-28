import { Download } from "lucide-react"
import './Softeng.css'
import labImg from '../assets/exp-001.webp';


export default function Softeng () {

    function openLink(link: string | URL) {
        window.open(link, "_blank", "noopener,noreferrer")
    }

    return (
        <>
        <div className="sde-section">
            <section className="sde-intro">
                <h1>Software Engineer</h1>
                <div className="sde-content">
                    <p className="sde-intro-text">Building full stack applications as an excuse to learn infrastructure.</p>
                    <p>I am Gaurav, pursuing bachelors in Cyber Security.</p>
                    <p>Full stack development became the fastest way for me to learn how modern software is built and deployed.</p>
                    <p>It has largely been an excuse to face infrastructures as problems</p>
                    <p>Currently, I am experimenting with <span className="experimenting-content">scheduling, cron jobs, Celery, and Redis</span></p>
                </div>
            </section>
            <section className="sde-links">
                <div className="lab-link">
                    <p>Check out my featured projects</p>
                    <div>
                        <button className="thumbnail-container-btn" onClick={() => openLink("https://labs.briarcastle.com/")}>
                            <img src={labImg} />
                        </button>
                    </div>
                </div>
                <div className="resume-download">
                    <p>Get my resume</p>
                    <div>
                        <button className="resume-download-btn">
                            <a href="/resume.pdf" download>
                                <p>
                                    12 July 2026
                                </p>
                                <Download className="download-icon"/>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="find-me">
                    <p>Find me</p>
                    <div className="find-me-links">
                        <a href="maligaurav791@gmail.com">
                            <span>Email</span>
                        </a>
                        <a href="https://briarcastle.com">
                            <span>Briar Castle</span>
                        </a>
                        <a href="https://github.com/DODO-unique">
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/gaurav-mali-vicpress">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}