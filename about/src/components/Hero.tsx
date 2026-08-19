import { ArrowDown } from "lucide-react";
import './Hero.css'

export default function Hero () {
    return (
        <>
        <div className="hero">
        <section className="sky">
            <div>
                
            <header className="title">
                <div>
                    <h1>Gaurav Mali</h1>
                    <p className="hero-subtitle">Building software, tools, and stories</p>
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
                    <p className="se-sub">
                        code <br />
                        design <br />
                        security <br />
                    </p>
                    <h3 className="se-head">
                        {`{`}&nbsp;
                            <a href="">
                                <span>
                                Software Engineer
                                </span>
                            </a>
                        &nbsp;{`}`}
                    </h3>
            </div>
            </div>
        </section>
        <div className="horizon">
            <div className="sky-one"></div>
            <div className="sky-two"></div>
            <div className="horizon-line"></div>
            <div className="ground-one"></div>
            <div className="ground-two"></div>
        </div>
        <section className="ground">
            <div>
                
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
                    Tech <br />
                    Fiction <br />
                    Realism <br />
                </p>
            </div>
            <footer className="hero-foot">
                <h3>
                    Dive
                </h3>
                <ArrowDown className="arrow" color="#20243D"/>
            </footer>
            </div>
        </section>
        </div>
        </>
    )
}