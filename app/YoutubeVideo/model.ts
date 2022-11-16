import { Sequelize, sequelize } from "./../../server/dbconfig";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";
import { Field, ObjectType } from "type-graphql";

@Table({
  timestamps: true,
  tableName: "youtube_videos",
  paranoid: true,
  underscored: true,
})
@ObjectType()
export class YoutuebVideoModel extends Model {
  @PrimaryKey
  @Column
  @Field({ nullable: false })
  public declare id?: number;

  @Column
  @Field({ nullable: true })
  public declare video_id?: string;

  @Column
  @Field({ nullable: true })
  public declare channel_id?: string;

  @Column
  @Field({ nullable: true })
  public declare title?: string;

  @Column
  @Field({ nullable: true })
  public declare description?: string;

  @Column
  @Field({ nullable: true })
  public declare thumbnail?: string;

  @Column
  @Field({ nullable: true })
  public declare channel_title?: string;

  @Column
  @Field({ nullable: true })
  public declare published_at?: Date;

  @Column
  @Field({ nullable: false })
  public declare created_at?: Date;

  @Column
  @Field({ nullable: false })
  public declare updated_at?: Date;

  @Column
  @Field({ nullable: true })
  public declare deleted_at?: Date;
}

sequelize.addModels([YoutuebVideoModel]);
