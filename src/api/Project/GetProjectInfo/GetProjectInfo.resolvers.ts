import Project from "../../../entities/Project";
import { Resolvers } from "../../../types/resolvers";
import { GetProjectInfoQueryArgs, GetProjectInfoResponse } from "../../../types/graph";

const resolvers: Resolvers = {
  Query: {
    GetProjectInfo: async(_, args: GetProjectInfoQueryArgs): Promise<GetProjectInfoResponse> => {
      const { projectId } = args;
      try {
        const project = await Project.findOne({ id: projectId });
        if (project) {
          return {
            ok: true,
            error: null,
            project
          }
        } else {
          return {
            ok: false,
            error: "Project doesn't exist",
            project: null
          }
        }
      } catch(error) {
        return {
          ok: false,
          error: error.message,
          project: null
        }
      }
    }
  }
};

export default resolvers;
