import {
  GetUserProfileQueryArgs,
  GetUserProfileResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetUserProfile: async (
      _,
      args: GetUserProfileQueryArgs
    ): Promise<GetUserProfileResponse> => {
      const { userId } = args;
      try {
        const user = await User.findOne({ id: userId });
        if (user) {
          return {
            ok: true,
            error: null,
            user
          };
        } else {
          return {
            ok: false,
            error: "No User",
            user: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
