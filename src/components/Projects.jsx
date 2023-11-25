import projects from "../assets/projects";
import "../App.css";

const Projects = () => {
    return (
        <div className="row justify-content-center">
            <div className="row">
                <div className="col-sm-12">
                    {projects.map((project, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn btn-primary">Repository</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;


