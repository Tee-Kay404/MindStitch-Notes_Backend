import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import { MetaOption } from "src/meta-options/meta-options.entity";
import { User } from "src/users/user.entity";
import { Tag } from "src/tags/tags.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false
    })
    title: string;
    
    @Column({
        type: 'enum',
        enum: PostType,
        default: PostType.POST,
        nullable: false
    })
    category: PostType
    
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
        unique: true,
    })
    slug: string;
    
    @Column({
       type: 'enum',
        enum: postStatus,
        default: postStatus.DRAFT,
        nullable: false
    })
    postStatus: postStatus
    
    @Column({
        type: 'text',
        nullable: true
    })
    content?: string;
    
    @Column({
      type: 'text',
        nullable: true
    })
    schema: string;
    
    @Column({
        type: 'varchar',
        length: 30,
        nullable: true
    })
    featuredImageUrl: string;
    
    @Column({
        type: 'timestamp', // datetime in mysql
        nullable: true
    })
    publishOn?: Date;

    @ManyToMany(()=> Tag, (tags)=> tags.post, {
        eager: true
    })
    @JoinTable()
    tags?: Tag[]

    @OneToOne(()=> MetaOption, (metaOptions)=> metaOptions.post, {
        cascade: true,
        eager: true
    })
    metaOptions?: MetaOption;
    
    @ManyToOne(()=> User, (user)=> user.posts, {
        eager: true
    })
    author: User;
}