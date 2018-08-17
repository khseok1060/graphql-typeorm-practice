export const typeDefs = ["type Project {\n  id: Int!\n  name: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype User {\n  id: Int!\n  name: String!\n  position: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  name: string;
  position: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Project {
  id: number;
  name: string | null;
  createdAt: string;
  updatedAt: string | null;
}
