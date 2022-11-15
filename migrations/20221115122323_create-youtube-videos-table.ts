import { QueryInterface, DataTypes } from "sequelize";

const TABLE_NAME = "youtube_videos";

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      video_id: {
        unique: true,
        type: DataTypes.STRING,
      },
      channel_id: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      thumbnail: {
        type: DataTypes.STRING,
      },
      channel_title: {
        type: DataTypes.STRING,
      },
      published_at: {
        type: DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.dropTable(TABLE_NAME),
};
