import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MethodsService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Performs a GET request to the specified URL.
   *
   * @param {string} url The URL to which the GET request will be made.
   * @returns {Observable<AxiosResponse<any>>} An Observable that emits the response of the request.
   *
   * @example
   * Example of how to use getService in a controller
   * Assuming you have a method in your controller that calls this service
   * @Controller()
   * export class MyController {
   *   constructor(private methodsService: MethodsService) {}
   *
   *   @Get('my-route')
   *   myMethod() {
   *     return this.methodsService.getService('https://myapi.com/data').pipe(
   *       map(response => response.data),
   *       catchError(error => throwError(() => new Error(error))),
   *     );
   *   }
   * }
   */
  getService(url: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(url);
  }
}
