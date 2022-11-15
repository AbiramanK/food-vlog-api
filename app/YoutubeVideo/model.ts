import { Sequelize, sequelize } from "./../../server/dbconfig";
import { Table, Column, Model } from "sequelize-typescript";
import { Field } from "type-graphql";

@Table({
  timestamps: true,
  tableName: "youtube_videos",
  paranoid: true,
  underscored: true,
})
export class YoutuebVideoModel extends Model {
  @Column
  @Field({ nullable: true })
  video_id?: string;

  @Column
  @Field({ nullable: true })
  channel_id?: string;

  @Column
  @Field({ nullable: true })
  title?: string;

  @Column
  @Field({ nullable: true })
  description?: string;

  @Column
  @Field({ nullable: true })
  thumbnail?: string;

  @Column
  @Field({ nullable: true })
  channel_title?: string;

  @Column
  @Field({ nullable: true })
  published_at?: Date;
}

sequelize.addModels([YoutuebVideoModel]);
