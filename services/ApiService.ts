import { AxiosStatic as Axios, AxiosResponse, AxiosRequestConfig } from 'axios';
import RequestHandler from 'axios-request-handler';
import { IApiService, LongPollingRequestOptions } from './ApiServiceInterface';
import { ApiError } from '~/interfaces/ApiError';

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
  } catch (error) {
    throw new ApiError(error);
  }
};

export const ApiService: IApiService = {
  init ($axios) {
    _axios = $axios;
  },
  async get<T = any> (url: string, options?: AxiosRequestConfig) {
    return await makeRequest<T>(url, 'GET', null, options);
  },
  async post<T = any> (url: string, data: Record<string, any> | string, options?: AxiosRequestConfig) {
    return await makeRequest<T>(url, 'POST', data, options);
  },
  async put<T = any> (url: string, data: Record<string, any>, options?: AxiosRequestConfig) {
    return await makeRequest<T>(url, 'PUT', data, options);
  },
  async delete<T = any> (url: string, options: AxiosRequestConfig) {
    return await makeRequest<T>(url, 'DELETE', null, options);
  },
  async customRequest<T = any> (data: Record<string, any>) {
    try {
      const response = await _axios.request<T>(data);
      return response.data;
    } catch (error) {
      throw new ApiError(error);
    }
  },
  makeLongPollingRequest (url: string, options?: LongPollingRequestOptions) {
    try {
      const request = new RequestHandler(url, _axios.defaults);
      return request.poll(options.pollTimer).get(options.callback);
    } catch (error) {
      throw new ApiError(error);
    }
  },
  setToken (accessToken) {
    _axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  revokeToken () {
    delete _axios.defaults.headers.common.Authorization;
  },
};
