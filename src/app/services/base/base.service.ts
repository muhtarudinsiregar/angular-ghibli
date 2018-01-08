import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseService {
  baseUrl: string = "https://ghibliapi.herokuapp.com/";
  constructor(private http: HttpClient) {}

  get<Observable>(url: string) {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  post(url: string, body?: any) {
    return this.http.post(url, body);
  }
}
