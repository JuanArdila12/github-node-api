import { Injectable } from '@nestjs/common';
import { MethodsService } from '../../../api-module/services/methods/methods.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponseDto } from '../../dto/api-response-dto';

@Injectable()
export class ApiConnectService {
  constructor(private methodsService: MethodsService) {}

  /**
   * Fetches the top 10 GitHub repositories for a specified user, sorted by stars.
   * The method makes an HTTP GET request to the GitHub API and formats the response into an ApiResponseDto.
   *
   * @param {string} user The GitHub username for which to fetch top repositories.
   * @returns {Observable<ApiResponseDto>} An Observable that emits an ApiResponseDto containing the status code, status message, and an array of repositories, or an error message and status code in case of failure.
   *
   * @example
   * // Example usage
   * this.apiConnectService.getTopRepositories('google').subscribe({
   *   next: (response) => console.log(response),
   *   error: (error) => console.error(error)
   * });
   */
  getTopRepositories(user: string): Observable<ApiResponseDto> {
    const url = `${process.env.GITHUB_API}/users/${user}/repos?sort=stars&per_page=10`;
    return this.methodsService.getService(url).pipe(
      map(
        (response: any) =>
          new ApiResponseDto('success', response.data, response.status),
      ),
      catchError((error: any) =>
        of(new ApiResponseDto('error', [], error.response.status)),
      ),
    );
  }
}
