import { Controller, Get, Res } from '@nestjs/common';
import { ApiConnectService } from '../../services/api-connect/api-connect.service';
import { Response } from 'express';

@Controller('v1/api-connect')
export class ApiConnectController {
  constructor(private apiConnectService: ApiConnectService) {}

  /**
   * Handles the GET request to retrieve the top 10 repositories of the 'google' user on GitHub.
   * This method utilizes the `ApiConnectService` to fetch the data and sends the response back to the client.
   *
   * @param {Response} response The Express response object used to send back the HTTP response.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   *
   * @example
   * Example route: GET /api-connect/top-repositories
   * This route would call this method and return the top 10 repositories of the 'google' user on GitHub.
   */
  @Get('top-repositories')
  async getTopRepositories(@Res() response: Response) {
    try {
      const repos = await this.apiConnectService
        .getTopRepositories('google')
        .toPromise();
      response.send(repos);
    } catch (error) {
      response.status(500).send({ message: 'Error getting repositories' });
    }
  }
}
