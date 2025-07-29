import { Body, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Injectable()
export class PostService {
    /**
     * Injecting user service
     */
    constructor(
        private readonly usersService: UserService,

        /**
         * Injecting post repository
         */
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        /**
         * Injecting the metaOptions repository
         */
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>

    ) {}
    public findAll(userId: string) {
        const user = this.usersService.findById(userId)
                console.log(userId);

return [
  {
    "title": "Top 5 Summer Fashion Trends to Rock in 2025",
    "category": "post",
    "slug": "summer-fashion-trends-2025",
    "status": "published",
    "content": "From oversized sunglasses to pastel tones, 2025's summer fashion is all about bold expression and minimal effort. Discover what to wear to stay ahead of the style curve.",
    "schema": "{\"season\":\"summer\",\"category\":\"fashion\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?summer,fashion",
    "Date": "2025-07-01T08:30:00+0000",
    "tags": ["fashion", "style", "trends"],
    "metaOptions": {}
  },
  {
    "title": "Inside the Drama: What Really Happened at the 2025 Oscars",
    "category": "post",
    "slug": "oscars-2025-drama-recap",
    "status": "published",
    "content": "This year’s Oscars had it all — surprises, snubs, and one unforgettable acceptance speech. We break down the top moments and backstage gossip.",
    "schema": "{\"event\":\"Oscars 2025\",\"category\":\"entertainment\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?oscars,redcarpet,celebrity",
    "Date": "2025-03-10T21:00:00+0000",
    "tags": ["entertainment", "celebrity", "oscars"],
    "metaOptions": {}
  },
  {
    "title": "Cristiano Ronaldo Announces Retirement: End of an Era",
    "category": "post",
    "slug": "ronaldo-retirement-news",
    "status": "published",
    "content": "After two decades at the top, football legend Cristiano Ronaldo officially announces his retirement. Fans and players reflect on his legacy.",
    "schema": "{\"sport\":\"football\",\"player\":\"Cristiano Ronaldo\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?ronaldo,football,soccer",
    "Date": "2025-06-18T12:00:00+0000",
    "tags": ["sports", "football", "retirement"],
    "metaOptions": {}
  },
  {
    "title": "How Gen Z Is Redefining Streetwear in 2025",
    "category": "post",
    "slug": "genz-streetwear-revolution",
    "status": "published",
    "content": "From TikTok influences to thrifted looks, Gen Z is changing the rules of street fashion. Here’s how the movement is evolving globally.",
    "schema": "{\"audience\":\"Gen Z\",\"trend\":\"streetwear\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?streetwear,fashion,urban",
    "Date": "2025-05-12T14:45:00+0000",
    "tags": ["fashion", "genz", "streetwear"],
    "metaOptions": {}
  },
  {
    "title": "Top 10 Netflix Originals You Can't Miss This Year",
    "category": "post",
    "slug": "top-netflix-shows-2025",
    "status": "published",
    "content": "From drama to comedy to true crime, these Netflix originals are binge-worthy hits. Check out our top picks for 2025.",
    "schema": "{\"platform\":\"Netflix\",\"category\":\"TV Shows\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?netflix,tv,cinema",
    "Date": "2025-04-01T09:15:00+0000",
    "tags": ["entertainment", "tv", "streaming"],
    "metaOptions": {}
  },
  {
    "title": "Wimbledon 2025: New Stars Rise as Legends Fall",
    "category": "post",
    "slug": "wimbledon-2025-recap",
    "status": "published",
    "content": "A dramatic year at Wimbledon saw fresh talent take the spotlight while some favorites bowed out. Here's a full recap of the tournament.",
    "schema": "{\"event\":\"Wimbledon\",\"category\":\"sports\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?wimbledon,tennis,court",
    "Date": "2025-07-15T10:00:00+0000",
    "tags": ["sports", "tennis", "wimbledon"],
    "metaOptions": {}
  },
  {
    "title": "Met Gala 2025: Red Carpet Highlights and WTF Moments",
    "category": "post",
    "slug": "met-gala-2025-style-highlights",
    "status": "published",
    "content": "The Met Gala brought drama, elegance, and a few questionable outfits. Take a look at who nailed it — and who didn’t.",
    "schema": "{\"event\":\"Met Gala\",\"focus\":\"fashion\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?metgala,fashion,redcarpet",
    "Date": "2025-05-07T18:20:00+0000",
    "tags": ["fashion", "events", "celebrity"],
    "metaOptions": {}
  },
  {
    "title": "5 Rising Nigerian Artists You Should Watch in 2025",
    "category": "post",
    "slug": "nigerian-music-2025-rising-stars",
    "status": "published",
    "content": "From Afrobeats to alternative sounds, these up-and-coming Nigerian artists are making waves across Africa and beyond.",
    "schema": "{\"music\":\"Afrobeats\",\"region\":\"Nigeria\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?nigeria,music,artist",
    "Date": "2025-06-03T17:10:00+0000",
    "tags": ["music", "nigeria", "entertainment"],
    "metaOptions": {}
  },
  {
    "title": "Is AI the New Fashion Designer? Exploring Tech in Couture",
    "category": "post",
    "slug": "ai-in-fashion-design",
    "status": "published",
    "content": "AI is stepping into the design studio, helping create garments that are both futuristic and functional. Can it replace human creativity?",
    "schema": "{\"topic\":\"AI\",\"industry\":\"fashion\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?ai,fashion,technology",
    "Date": "2025-06-21T13:30:00+0000",
    "tags": ["ai", "fashion", "technology"],
    "metaOptions": {}
  },
  {
    "title": "Champions League Final 2025: Full Match Breakdown",
    "category": "post",
    "slug": "ucl-final-2025-analysis",
    "status": "published",
    "content": "A tactical look at the 2025 UEFA Champions League final — from formation changes to standout players.",
    "schema": "{\"sport\":\"football\",\"event\":\"UCL Final\"}",
    "featuredImageUrl": "https://source.unsplash.com/600x400/?championsleague,football,stadium",
    "Date": "2025-05-29T20:00:00+0000",
    "tags": ["sports", "football", "championsleague"],
    "metaOptions": {}
  }
];

    }

    // Create new Post 
    public async create(@Body() createPostDto: CreatePostDto) {
        let metaOption: MetaOption | null = null;
        const { metaOptions, ...mainPostDto } = createPostDto

        if (metaOptions) {
            metaOption = this.metaOptionsRepository.create(metaOptions)
            await this.metaOptionsRepository.save(metaOption)
        }

         let post = this.postRepository.create({
            ...mainPostDto,
            ...(metaOption && ({
                metaOptions: metaOption
            }))

         })
        // Add metaOptions to the post
        //  if(metaOption) {
        //     post.metaOptions = metaOption;
        //  }

        // return the post to the user
        return await this.postRepository.save(post)



        //  create metaOptions
        //  let metaOption = createPostDto.metaOptions? this.metaOptionsRepository.create(createPostDto.metaOptions) : null

        //  if(metaOption) {
        //     await this.metaOptionsRepository.save(metaOption);
        //  }
        // //  let ok = createPostDto.metaOptions
        // // create post
        // let post = this.postRepository.create(createPostDto);

        // Add metaOptions to the post


        // return the post to the user
    }
}
