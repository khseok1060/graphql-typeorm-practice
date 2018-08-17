import { AddNewProjectMutationArgs, AddNewProjectResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import Project from "../../../entities/Project";

const resolvers: Resolvers = {
  Mutation: {
    AddNewProject: async(_, args: AddNewProjectMutationArgs): Promise<AddNewProjectResponse> => {
      const { name } = args;
      try {
        const existingProj = await Project.findOne({ name });
        if(existingProj) {
          return {
            ok: false,
            error: "Already exist project"
          }
        } else {
          await Project.create({ ...args }).save();
          return {
            ok: true,
            error: null
          }
        }

      } catch(error) {
        return {
          ok: false,
          error: error.message
        }
      }
    }
  }
};

export default resolvers;
