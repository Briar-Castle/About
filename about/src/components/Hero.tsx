import { ArrowDown } from "lucide-react";

export default function Hero () {
    return (
        <>
            <header className="title">
                <h1>Gaurav Mali</h1>
                <p>Building software, tools, and stories</p>
                <div className="direct-download-link">
                    <p>
                        [ &nbsp;
                        <a href="/resume.pdf" download>
                            Download Resume
                        </a>
                        &nbsp; ]
                    </p>   
                </div>
            </header>
            <div className="se-block">
                    <h3 className="se-head">
                        {`{`} &nbsp;
                            <a href="">
                                Software Engineer
                            </a>
                        &nbsp; {`}`}
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
                    [ &nbsp;
                        <a href="">
                            Writer
                        </a>
                    &nbsp; ]
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
        </>
    )
}