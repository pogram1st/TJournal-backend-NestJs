import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { UserEntity } from "./user/entities/user.entity";
import { PostModule } from "./post/post.module";
import { PostEntity } from "./post/entities/post.entity";
import { CommentModule } from "./comment/comment.module";
import { CommentEntity } from "./comment/entities/comment.entity";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ssl: true,
      type: "postgres",
      host: "dpg-cfdgta9a6gdja6bkaqug-a.frankfurt-postgres.render.com",
      port: 5432,
      username: "adminchik",
      password: "yCtmaw3JnNOpHxcWVPz87w0UPOP6N5jn",
      database: "tjournal",
      entities: [UserEntity, PostEntity, CommentEntity], // Передаем в зависимости Entity
      synchronize: false,
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}