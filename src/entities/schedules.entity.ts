import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Property from "./properties.entity";

import User from "./users.entity";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({type:"date"})
  date: string;
  @Column({type:"time"})
  hour: string;
  @ManyToOne(() => Property,( p) => p.id)
  property: Property;
  @ManyToOne(() => User, (u) => u.id)
  user: User;
}

export default Schedule;
