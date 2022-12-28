import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Address from "./addresses.entity";
import Category from "./categories.entity";
import Schedule from "./schedules.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @Column()
  categoryId: string;

  @Column()
  addressId: string;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Schedule, (schedule) => schedule.property)
  schedules: Schedule[];

  @ManyToOne(() => Category, category => category.property)
  category: Category;
}

export default Property;
