import { Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
export class AppInfo {
  @Field()
  appName!: String;

  @Field()
  appVersion!: string;
}

@Resolver()
class AppInfoResolver {
  @Query(() => AppInfo)
  async info() {
    return {
      appName: "Food Vlog",
      appVersion: "v1.0",
    };
  }
}
