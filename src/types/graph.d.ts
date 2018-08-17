export const typeDefs = ["type AddNewProjectResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddNewProject(name: String!): AddNewProjectResponse!\n  AddProjectParticipants(projectId: Int!, userId: Int!): AddProjectParticipantsResponse!\n  SignUp(name: String!, position: String!): SignUpResponse!\n}\n\ntype AddProjectParticipantsResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetProjectInfoResponse {\n  ok: Boolean!\n  error: String\n  project: Project\n}\n\ntype Query {\n  GetProjectInfo(projectId: Int!): GetProjectInfoResponse!\n  GetUserProfile(userId: Int!): GetUserProfileResponse!\n}\n\ntype Project {\n  id: Int!\n  name: String\n  participants: [User]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetUserProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  name: String!\n  position: String\n  projectsId: Int!\n  projects: Project\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetProjectInfo: GetProjectInfoResponse;
  GetUserProfile: GetUserProfileResponse;
}

export interface GetProjectInfoQueryArgs {
  projectId: number;
}

export interface GetUserProfileQueryArgs {
  userId: number;
}

export interface GetProjectInfoResponse {
  ok: boolean;
  error: string | null;
  project: Project | null;
}

export interface Project {
  id: number;
  name: string | null;
  participants: Array<User> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  name: string;
  position: string | null;
  projectsId: number;
  projects: Project | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetUserProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  AddNewProject: AddNewProjectResponse;
  AddProjectParticipants: AddProjectParticipantsResponse;
  SignUp: SignUpResponse;
}

export interface AddNewProjectMutationArgs {
  name: string;
}

export interface AddProjectParticipantsMutationArgs {
  projectId: number;
  userId: number;
}

export interface SignUpMutationArgs {
  name: string;
  position: string;
}

export interface AddNewProjectResponse {
  ok: boolean;
  error: string | null;
}

export interface AddProjectParticipantsResponse {
  ok: boolean;
  error: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
}
