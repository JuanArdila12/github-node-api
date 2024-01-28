import { Test, TestingModule } from '@nestjs/testing';
import { ApiConnectService } from './api-connect.service';

describe('ApiConnectService', () => {
  let service: ApiConnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiConnectService],
    }).compile();

    service = module.get<ApiConnectService>(ApiConnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
