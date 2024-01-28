import { RepositoryDetailsDto } from './repository-dto';

export class ApiResponseDto {
  status: string;
  statusCode: number;
  response: RepositoryDetailsDto[];

  constructor(status: string, repositories: any[], statusCode: number) {
    this.status = status;
    this.statusCode = statusCode;
    this.response = repositories.map((repo) => new RepositoryDetailsDto(repo));
  }
}
