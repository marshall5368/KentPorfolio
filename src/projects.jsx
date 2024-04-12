function Projects(){
    return(
        <div className="projects" >
           
                <h1 className="titlehead"id="projects">Projects</h1>
                    <div className="projectAlbum">

                        <div className="projectCard">
                            <img src="src\assets\porfolio.png" alt="" />
                            <div className="textProject">
                                <h1>My First react Portfolio</h1>
                                <p>This was the latest project that i create using react.</p>
                                <button><a href="">Repository</a></button>
                            </div>
                        </div>

                        <div className="projectCard">
                            <img src="src\assets\seclouth.png" alt="" />
                            <div className="textProject">
                                <h1>Selcouth E-commerce webpage</h1>
                                <p>This Project is mainly built by HTML CSS and JavaScript</p>
                                <button><a href="">Repository</a></button>
                            </div>
                        </div>

                        <div className="projectCard">
                            <img src="src\assets\unfinished todo app.png" alt="" />
                            <div className="textProject">
                                <h1>A to do App</h1>
                                <p>This Project is mainly built with react this is my first app but its unfinnished</p>
                                <button><a href="">Repository</a></button>
                            </div>
                        </div>

                    </div>
        </div>
    )
}
export default Projects