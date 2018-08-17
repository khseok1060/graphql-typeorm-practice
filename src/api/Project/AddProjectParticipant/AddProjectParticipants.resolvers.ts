import Project from "../../../entities/Project";
import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import {
  AddProjectParticipantsMutationArgs,
  AddProjectParticipantsResponse
} from "../../../types/graph";

const resolvers: Resolvers = {
  Mutation: {
    AddProjectParticipants: async (
      _,
      args: AddProjectParticipantsMutationArgs
    ): Promise<AddProjectParticipantsResponse> => {
      const { projectId, userId } = args;
      try {
        const project = await Project.findOne({ id: projectId });
        if (project) {
          const user = await User.findOne({ id: userId });
          if (user) {
            project.participants = [user];
            await project.save();
            return {
              ok: true,
              error: null
            };
          } else {
            return {
              ok: false,
              error: "No User with that Id!"
            };
          }
        } else {
          return {
            ok: false,
            error: "No Project with that Id!"
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
