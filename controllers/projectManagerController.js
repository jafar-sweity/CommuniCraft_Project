import Project from "../models/Project.js";

const getProjectsForProjectManager = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: { project_manager_id: req.params.projectManagerId },
    });
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving projects.",
    });
  }
};

export { getProjectsForProjectManager };
