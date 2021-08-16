import { AxiosStatic as Axios, AxiosResponse, AxiosRequestConfig } from 'axios';
import { IApiService, LongPollingRequestOptions } from './ApiServiceInterface';
import RequestHandler from 'axios-request-handler';
import { ApiError } from '@/utils/apiError';
import { eventBus } from '@/utils/eventBus';

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
    const { response }: { response: AxiosResponse } = err;

    // server error
    if (/5[0-9][0-9]/.test('' + response.status)) {
      eventBus.$emit('global:show-error-toast');
      throw new Error(err);
    }
  }
};

export const ApiService: IApiService = {
  init($axios) {
    _axios = $axios;
    // Add a response interceptor
    /*_axios.interceptors.response.use(function (response) {
			// Do something with response data
			return response;
		}, function (error) {
			// Do something with response error
			return Promise.reject(error);
  		});*/
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
  revokeToken() {
    delete _axios.defaults.headers.common['Authorization'];
  },
};
