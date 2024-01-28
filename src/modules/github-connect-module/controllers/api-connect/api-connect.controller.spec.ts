import { Test, TestingModule } from '@nestjs/testing';
import { ApiConnectController } from './api-connect.controller';

describe('ApiConnectController', () => {
  let controller: ApiConnectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiConnectController],
    }).compile();

    controller = module.get<ApiConnectController>(ApiConnectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
