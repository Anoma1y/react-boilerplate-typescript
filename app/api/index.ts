import axios, { AxiosInstance } from "axios";
import config, { IStatusCode } from "./config";
import Modules from "./Modules";

type IModule = {
  [key: string]: any;
};

class Api {
  code: IStatusCode;
  modules: IModule;
  private readonly http: AxiosInstance;

  constructor() {
    this.code = config.STATUS_CODES;

    this.http = axios.create({
      baseURL: config.BASE_URL,
      timeout: config.TIMEOUT,
      headers: {
        ...config.HEADERS
      }
    });

    const generatedModules: IModule = {};

    for (const mod in Modules) {
      if (Modules.hasOwnProperty(mod)) {
        const moduleKey: string = mod.replace(/([Aa]pi[Mm]odule)/g, "").toLocaleLowerCase();
        // @ts-ignore
        generatedModules[moduleKey] = new Modules[mod](this.http);
      }
    }

    this.modules = {
      ...generatedModules
    };

    this.registerBeforeInterceptor();
    this.registerAfterInterceptor();
  }

  addHeader(key: string, value: string | number) {
    return new Promise((resolve) => {
      this.http.defaults.headers = {
        ...this.http.defaults.headers,
        [key]: value
      };
      resolve();
    });
  }

  removeHeader(key: string) {
    if (key in this.http.defaults.headers) {
      delete this.http.defaults.headers[key];
    }
  }

  private registerBeforeInterceptor() {
    this.http.interceptors.request.use((cfg) => cfg, (error) => Promise.reject(error));
  }

  private registerAfterInterceptor() {
    this.http.interceptors.response.use((response) => response, (error) => Promise.reject(error));
  }
}

export const api = new Api();
