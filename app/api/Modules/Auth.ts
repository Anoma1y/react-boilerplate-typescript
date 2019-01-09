import { AxiosInstance } from 'axios';

class Auth {

  constructor(private http: AxiosInstance) {
    this.http = http;
  }

  getToken(id: number = 1) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

}

export default Auth;
