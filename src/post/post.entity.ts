import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import CreatePostMetaOptionsDto from "../meta-options/dtos/create-post-meta-options.dto";
import { MetaOption } from "src/meta-options/meta-options.entity";
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
    postType: PostType
    
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
    publishOn?: Date
    

    //work on this later in the course
   @Column("int", { array: true , nullable: true})
    tags?: string[];

//    @Column("int", { array: true , nullable: false})
    @OneToOne(()=> MetaOption)
    @JoinColumn()
    metaOptions?: MetaOption;
}