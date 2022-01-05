import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AcctService {
  private readonly host = "/api";

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string) {
    return this.http
      .post(
        `${this.host}/logIn`,
        { username, password },
        { withCredentials: true }
      )
      .toPromise();
  }

  logOut(username: string) {
    return this.http
      .post(
        `${this.host}/logOut`,
        { username },
        { withCredentials: true }
      )
      .toPromise();
  }

  register(uName: string, pWord: string) { //and more profile details
    return this.http
      .post(
        `${this.host}/register`,
        { uName, pWord },
        { withCredentials: true }
      )
      .toPromise();
  }

  saveLog(log: string) {
    return this.http
      .post(
        `${this.host}/saveLog`,
        { log },
        { withCredentials: true }
      )
      .toPromise();
  }

}
