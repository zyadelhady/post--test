import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './Posts/Post.module';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://zyad:axQ85nrkPvtpemgo@cluster0.1kr59.mongodb.net/Posts?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.1kr59.mongodb.net/Posts?retryWrites=true&w=majority`,
