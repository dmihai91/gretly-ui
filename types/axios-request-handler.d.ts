declare module 'axios-request-handler' {
  import { AxiosResponse } from 'axios';

  export interface RequestHandler {
    get: (cl?: Function, options?: object) => Promise<AxiosResponse>;
    post: (cl?: Function, options?: object) => Promise<AxiosResponse>;
  }

  export default class Request {
    constructor(url: string, options?: object);

    isPending(method?: string): boolean;
    isUpdating(method?: string): boolean;
    isPolling(method?: string): boolean;

    poll(timer: number): RequestHandler;

    cancel(method?: string): void;
    setOffPendingStatus(method?: string): void;
  }
}
