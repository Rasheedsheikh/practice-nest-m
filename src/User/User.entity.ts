// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from "@nestjs/typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;


  @Column() // Add the issue column
  issue: string;
}
