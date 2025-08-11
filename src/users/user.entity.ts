import { Post } from "src/post/post.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
     type: 'varchar',
     length: 32,
     nullable: false
  })
  firstName: string;

  @Column({
     type: 'varchar',
     length: 32,
     nullable: true
  })
  lastName: string;

  @Column({
     type: 'varchar',
     length: 32,
     nullable: false,
     unique: true
  })
  email: string;

  @Column({
     type: 'varchar',
     length: 250,
     nullable: false
  })
  password: string;

  @OneToMany(()=> Post, (post)=> post.author)
  posts: Post[];
}