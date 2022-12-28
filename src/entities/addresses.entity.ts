import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ nullable: true })
  number: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 50 })
  city: string;

  @Column()
  state: string;
}

export default Address;
