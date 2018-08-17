import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import User from "./User";

@Entity()
class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @OneToMany(type => User, user => user.projects)
  participants: User[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Project;
