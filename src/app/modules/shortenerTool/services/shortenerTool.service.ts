import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ShortenerToolResponseInterface} from "../store/interfaces/initialState.interface";

@Injectable({
  providedIn: "root"
})
export class ShortenerToolService {

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }
  public getUrls(url: string): Observable<ShortenerToolResponseInterface> {
    return this._httpClient.get<ShortenerToolResponseInterface>(`https://api.shrtco.de/v2/shorten?url=${url}`)
  }
}
