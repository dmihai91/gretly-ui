import { AxiosStatic as Axios, AxiosResponse, AxiosRequestConfig } from 'axios';
import Request, { RequestHandler } from 'axios-request-handler';

export interface LongPollingRequest {
  request: Request;
  poll: RequestHandler;
}

export interface LongPollingRequestOptions {
  pollTimer: number;
  callback?: Function;
}

export interface IApiService {
  /** Initialize the API Service */
  init($axios: Axios): void;

  /** Perform an AJAX GET operation */
  get<T = any>(url: string, options?: AxiosRequestConfig): Promise<T>;

  /** Perform an AJAX POST operation */
  post<T = any>(url: string, data?: Record<string, any> | string, options?: AxiosRequestConfig): Promise<T>;

  /** Perform an AJAX PUT operation */
  put<T = any>(url: string, data?: Record<string, any>, options?: AxiosRequestConfig): Promise<T>;

  /** Perform an AJAX DELETE operation */
  delete<T = any>(url: string, options?: AxiosRequestConfig): Promise<T>;

  /**
   * Perform a custom Axios request.
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest<T>(data: Record<string, any>): Promise<T>;

  /** Make a long polling AJAX request */
  makeLongPollingRequest(url: string, options?: LongPollingRequestOptions): Promise<AxiosResponse>;

  /** Set authorization token for all the requests */
  setToken(accessToken: string): void;

  /** Revoke the authorization token for all the requests */
  revokeToken(): void;
}
