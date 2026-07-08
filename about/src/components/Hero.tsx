import { ArrowDown } from 'lucide-react'

export default function Hero () {
    return (
        <>
            <header className="title">
                <h1>Gaurav Mali</h1>
                <p>Building software, tools, and stories</p>
                <div className="direct-download-link">
                    <p>
                        [
                        <a href="/resume.pdf" download>
                            Download Resume
                        </a>
                        ]
                    </p>   
                </div>
            </header>
            <div className="se-block">
                    <h6 className="se-head">
                        { 
                            <a href="">
                                Software Engineer
                            </a>
                        }
                    </h6>
                    <p className="se-sub">
                        code
                        design
                        security
                    </p>
            </div>
            <div>
                <div className="sky-one"></div>
                <div className="sky-two"></div>
                <div className="horizon"></div>
                <div className="ground-one"></div>
                <div className="ground-two"></div>
            </div>
            <div className="wrtr-block">
                <h6 className="wrtr-head">
                    [ 
                        <a href="">
                            Writer
                        </a>
                    ]
                </h6>
                <p className="wrtr-sub">
                    Tech
                    Fiction
                    Realism
                </p>
            </div>
            <footer className="hero-foot">
                    <h6>
                        Dive
                    </h6>
                    <ArrowDown color="#20243D"/>
            </footer>
        </>
    )
}