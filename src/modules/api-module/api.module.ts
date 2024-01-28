import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MethodsService } from './services/methods/methods.service';

@Module({
  imports: [HttpModule],
  providers: [MethodsService],
  exports: [MethodsService],
})
export class ApiModule {}
