import { Injectable } from "@angular/core";
import { BaseService } from "../base/base.service";
import { ApiEnum } from "../../enum/api.enum";

@Injectable()
export class FilmService {
  constructor(private baseUrl: BaseService) {}

  getFilms() {
    return this.baseUrl.get(ApiEnum.GET_FILMS);
  }

  getFilmById(id: number) {
    return this.baseUrl.get(`${ApiEnum.GET_FILMS}/${id}`);
  }
}
