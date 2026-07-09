import { Download } from "lucide-react"
import './Softeng.css'


export default function Softeng () {

    function openLink(link: string | URL) {
        window.open(link, "_blank", "noopener,noreferrer")
    }

    return (
        <>
            <div className="sde-intro">
                <h1>Software Engineer</h1>
                <div className="sde-content">
                    <p>Building full stack applications as an excuse to learn infrastructure.</p>
                    <p>I am Gaurav, pursuing bachelors in Cyber Security.</p>
                    <p>Full stack development became the fastest way for me to learn how modern software is built and deployed.</p>
                    <p>It has largely been an excuse to face infrastructures as problems</p>
                    <p>Currently, I am experimenting with <span className="experimenting-content">scheduling, cron jobs, Celery, and Redis</span></p>
                </div>
            </div>
            <div className="sde-links">
                <div className="lab-link">
                    <p>Check out my featured projects</p>
                    <button onClick={() => openLink("https://labs.briarcastle.com/")}>
                        <img src="" />
                    </button>
                </div>
                <div className="resume-download">
                    <p>Get my resume</p>
                    <button>
                        <p>
                            12 July 2026
                        </p>
                        <Download className="download-icon"/>
                    </button>
                </div>
                <div>
                    <p>Find me</p>
                    <div className="find-me-links">
                        <a href="maligaurav791@gmail.com">
                            Email
                        </a>
                        <a href="https://briarcastle.com">
                            Briar Castle
                        </a>
                        <a href="https://github.com/DODO-unique">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/gaurav-mali-vicpress">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}