import axios from 'axios';

import config, { IStatusCode } from './config';

class Api {

  code: IStatusCode;
  http: any;

  constructor() {
    this.code = config.STATUS_CODES;

    this.http = axios.create({
      baseURL: config.BASE_URL,
      timeout: config.TIMEOUT,
      headers: {
        ...config.HEADERS
      }
    });

    this.registerBeforeInterceptor();
    this.registerAfterInterceptor();
  }

  addHeader(key, value) {
    return new Promise((resolve) => {

      this.http.defaults.headers = {
        ...this.http.defaults.headers,
        [key]: value
      };
      resolve();

    });
  }

  removeHeader(key) {
    if (key in this.http.defaults.headers) {
      delete this.http.defaults.headers[key];
    }
  }

  registerBeforeInterceptor() {
    this.http.interceptors.request.use(
      (cfg) => cfg,
      (error) => Promise.reject(error)
    );
  }

  registerAfterInterceptor() {
    this.http.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }
}

export const api = new Api();
