import {
  Arg,
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { YoutuebVideoModel } from "./model";

@InputType()
class PaginationInput {
  @Field()
  limit: number = 10;

  @Field()
  cursor: number = 0;
}

@ObjectType()
class PageInfo {
  @Field()
  declare hasMore: boolean;

  @Field()
  declare cursor: number;
}

@ObjectType()
class PaginationOutput {
  @Field(() => [YoutuebVideoModel])
  declare edgeds: YoutuebVideoModel[];

  @Field()
  declare pageInfo: PageInfo;
}

@Resolver()
export class YoutubeVideoResolver {
  @Query(() => PaginationOutput)
  async get_latest_youtube_videos(
    @Arg("input") input: PaginationInput
  ): Promise<PaginationOutput> {
    const youtubeVideos = await YoutuebVideoModel.findAndCountAll({
      order: [["published_at", "desc"]],
      limit: input.limit,
      offset: input.cursor,
    });

    const cursor = youtubeVideos?.rows?.length!;
    const hasMore = cursor < youtubeVideos?.count;
    return {
      edgeds: youtubeVideos?.rows!,
      pageInfo: {
        cursor,
        hasMore,
      },
    };
  }
}
