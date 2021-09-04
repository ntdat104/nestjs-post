import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URL } from "configs";

@Module({
  imports: [PostsModule, UserModule, MongooseModule.forRoot(MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
