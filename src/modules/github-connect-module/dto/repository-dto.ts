export class RepositoryDetailsDto {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;

  constructor(repo: any) {
    this.name = repo.name;
    this.html_url = repo.html_url;
    this.description = repo.description;
    this.stargazers_count = repo.stargazers_count;
    this.forks_count = repo.forks_count;
    this.language = repo.language;
  }
}
