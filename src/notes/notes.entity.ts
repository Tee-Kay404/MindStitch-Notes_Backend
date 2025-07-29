import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notes{
    @PrimaryGeneratedColumn()
   id: number
  
   @Column({
    type: 'varchar',
    nullable: true,
   })
   title?: string;

    @Column({
    type: 'text',
    nullable: true,
   })
   body?: string;

   
}