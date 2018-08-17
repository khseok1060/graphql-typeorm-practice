import { Resolvers } from "../../../types/resolvers";
import { SignUpMutationArgs, SignUpResponse } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    SignUp: async (_, args: SignUpMutationArgs): Promise<SignUpResponse> => {
      const { name } = args;
      try {
        const existingUser = await User.findOne({ name });
        if (existingUser) {
          return {
            ok: false,
            error: "Already Exists"
          };
        } else {
          await User.create({ ...args }).save();
          return {
            ok: true,
            error: null
          }
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
