import { Module } from '@nestjs/common';
import { ApiConnectController } from './controllers/api-connect/api-connect.controller';
import { ApiConnectService } from './services/api-connect/api-connect.service';
import { MethodsService } from '../api-module/services/methods/methods.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ApiConnectController],
  providers: [ApiConnectService, MethodsService],
})
export class GithubConnectModule {}
