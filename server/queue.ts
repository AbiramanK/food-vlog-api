import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import moment, { DurationInputArg1, DurationInputArg2 } from "moment";
import { YoutuebVideoModel } from "./../app/YoutubeVideo/model";

const process_data = async () => {
  get_youtube_videos();
};

const get_youtube_videos = async () => {
  const duration: DurationInputArg1 =
    process.env.NODE_APP_YOUTUBE_SEARCH_RESULT_AFTER_PUBLISHED_DURATION!;
  const durationUnit: DurationInputArg2 = process.env
    .NODE_APP_YOUTUBE_SEARCH_RESULT_AFTER_PUBLISHED_DURATION_UNIT! as any;

  const publishedAfter = moment()
    .subtract(duration, durationUnit)
    .toISOString();

  try {
    const youtubeVideos = await axios({
      url: `${process.env.NODE_APP_YOUTUBE_API}/search`,
      method: "GET",
      params: {
        part: "snippet",
        maxResults: process.env.NODE_APP_YOUTUBE_MAX_RESULTS,
        q: process.env.NODE_APP_YOUTUBE_SEARCH_QUERY,
        type: process.env.NODE_APP_YOUTUBE_SEARCH_RESULT_TYPE,
        publishedAfter,
        order: process.env.NODE_APP_YOUTUBE_SEARCH_RESULT_SORT_BY,
        key: process.env.NODE_APP_GOOGLE_API_KEY,
      },
    });

    if (!!youtubeVideos) {
      const totalVideosCount = youtubeVideos?.data?.items?.length;

      youtubeVideos?.data?.items.map(async (video: any, index: number) => {
        try {
          await YoutuebVideoModel.findOrCreate({
            where: { video_id: video?.id?.videoId },
            defaults: {
              video_id: video?.id?.videoId,
              channel_id: video?.snippet?.channelId,
              title: video?.snippet?.title,
              description: video?.snippet?.description,
              thumbnail: video?.snippet?.thumbnails?.default?.url,
              channel_title: video?.snippet?.channelTitle,
              published_at: video?.snippet?.publishedAt,
            },
          });

          console.log(
            "\x1b[32m",
            `Insertion completed by: ${index + 1}/${totalVideosCount}`,
            "\x1b[0m"
          );
        } catch (error: any) {
          console.error(
            "Youtube video api data insertion fails: ",
            error?.message
          );
        }
      });
    }
  } catch (error: any) {
    console.error("fetching youtube videos catch: ", error);
  }
};

process_data();
