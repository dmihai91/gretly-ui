import { AxiosStatic as Axios, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { IApiService, LongPollingRequestOptions } from './ApiServiceInterface';
import RequestHandler from 'axios-request-handler';
import { ApiError } from '~/utils/apiError';
import { Events } from '~/const/events';
import { eventBus } from '~/utils/eventBus';
import { ErrorReasons } from '~/enum/ErrorReasons';

let _axios: Axios = null;

const makeRequest = async <T = any>(
  url: string,
  verb: string,
  data?: string | Record<string, any>,
  options?: AxiosRequestConfig
) => {
  const verbs = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
  };
  if (!(verb in verbs)) {
    throw new Error(`${verb} verb not supported`);
  }
  try {
    let response: AxiosResponse<any>;
    if (verb === 'GET') {
      response = await _axios.get<T>(url, options);
    } else if (verb === 'DELETE') {
      response = await _axios.delete<T>(url, options);
    } else {
      response = await _axios[verbs[verb]]<T>(url, data, options);
    }
    return response.data;
  } catch (err) {
    errorsHandler(err);
  }
};

const errorsHandler = (err: any) => {
  const { response }: { response: AxiosResponse } = err;

  // handle server error
  if (/5[0-9][0-9]/.test('' + response.status)) {
    eventBus.$emit(Events.GLOBAL_SHOW_ERROR);
  }

  // handle bad request
  if (response.status === 400) {
    throw new ApiError(response);
  }

  // handle unauthorized error
  if (response.status === 401) {
    const { config } = response;
    const error = new ApiError(response);
    if (error.details.reason !== ErrorReasons.NO_REFRESH_TOKEN) {
      // try to refresh the token and redo the request
      eventBus.$emit(Events.GLOBAL_REFRESH_TOKEN);
      makeRequest(config.url, config.method, config.data);
      return;
    }
  }

  throw err;
};

export const ApiService: IApiService = {
  init($axios) {
    _axios = $axios;
  },
  async get<T = any>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>(url, 'GET', null, options);
  },
  async post<T = any>(url: string, data: Record<string, any> | string, options?: AxiosRequestConfig) {
    return makeRequest<T>(url, 'POST', data, options);
  },
  async put<T = any>(url: string, data: Record<string, any>, options?: AxiosRequestConfig) {
    return makeRequest<T>(url, 'PUT', data, options);
  },
  async delete<T = any>(url: string, options: AxiosRequestConfig) {
    return makeRequest<T>(url, 'DELETE', null, options);
  },
  async customRequest<T = any>(data: Record<string, any>) {
    const response = await _axios.request<T>(data);
    return response.data;
  },
  async makeLongPollingRequest(url: string, options?: LongPollingRequestOptions) {
    const request = new RequestHandler(url, _axios.defaults);
    return request.poll(options.pollTimer).get(options.callback);
  },
  setToken(accessToken) {
    _axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },
  removeToken() {
    delete _axios.defaults.headers.common['Authorization'];
  },
};
