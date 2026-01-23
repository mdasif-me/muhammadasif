import { projects } from "./constants"
import Project from "./project"

const Projects = ({ showAll = false }: { showAll?: boolean }) => {
  const displayProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <div className="xl:space-y-10 space-y-3">
      {displayProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
