import { Module } from '@nestjs/common';
import { ApiModule } from './modules/api-module/api.module';
import { GithubConnectModule } from './modules/github-connect-module/github-connect.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Nest modules
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ApiModule,
    GithubConnectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
