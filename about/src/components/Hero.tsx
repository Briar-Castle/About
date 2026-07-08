export default function Hero () {
    return (
        <>
            <div className="title">
                <h1>Gaurav Mali</h1>
                <p>Building software, tools, and stories</p>
            </div>
            <div className="direct-download-link">
                <p>
                    [
                    <a href="/resume.pdf" download>
                        Download Resume
                    </a>
                    ]
                </p>   
            </div>
            <div className="se-block">
                    <h6>
                        { 
                            <a href="">
                                Software Engineer
                            </a>
                        }
                    </h6>
                    <p>
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
        </>
    )
}