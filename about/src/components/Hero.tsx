import { ArrowDown } from "lucide-react";
import './Hero.css'

export default function Hero () {
    return (
        <>
        <div className="hero-bg">
        <div className="hero">

            <header className="title">
                <div>
                    <h1>Gaurav Mali</h1>
                    <p>Building software, tools, and stories</p>
                </div>
                <div className="direct-download-link">
                    <p>
                        [&nbsp;
                        <a href="/resume.pdf" download>
                            <span>
                                Download Resume
                            </span>
                        </a>
                        &nbsp;]
                    </p>   
                </div>
            </header>
            <div className="se-block">
                    <h3 className="se-head">
                        {`{`}&nbsp;
                            <a href="">
                                <span>
                                Software Engineer
                                </span>
                            </a>
                        &nbsp;{`}`}
                    </h3>
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
                <h3 className="wrtr-head">
                    [&nbsp;
                        <a href="">
                            <span>
                                Writer
                            </span>
                        </a>
                    &nbsp;]
                </h3>
                <p className="wrtr-sub">
                    Tech
                    Fiction
                    Realism
                </p>
            </div>
            <footer className="hero-foot">
                <h3>
                    Dive
                </h3>
                <ArrowDown color="#20243D"/>
            </footer>
        </div>
        </div>
        </>
    )
}