import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AcctService {
  private readonly host = "/api";

  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  private myFunc: () => void;
  logChange(fn: () => void) {
    this.myFunc = fn;
  }

  tempLogIn() {
    this.loggedIn = true;
    this.myFunc();
  }

  tempLogOut() {
    this.loggedIn = false;
    this.myFunc();
  }

  logIn(username: string, password: string) {
    return this.http
      .post(
        `${this.host}/login`,
        { username, password },
        { withCredentials: true }
      )
      .toPromise();
  }

  logOut(username: string) {
    return this.http
      .delete(
        `${this.host}/logout`,
        { withCredentials: true }
      )
      .toPromise();
  }

  register(uName: string, pWord: string, name: string, email:string, walletID: string, mobile_number:string) { //and more profile details
    return this.http
      .post(
        `${this.host}/users`,
        { uName, pWord, name, email, walletID, mobile_number },
        { withCredentials: true }
      )
      .toPromise();
  }

  getSelf(){
    return this.http.get(
      `${this.host}/users/self`,
      {withCredentials: true}
    )
    .toPromise();
  }

  getUser(id:string){return this.http
    .get(
      `${this.host}/users/${id}`,
      {withCredentials: true}
    )
    .toPromise();
  }

  createOffer(nft_id:string, seller:string, buyer:string, amount:number) {
    return this.http
      .post(
        `${this.host}/offers`,
        { nft_id, seller, buyer, amount },
        { withCredentials: true }
      )
      .toPromise();
  }

  getOffer(id:string) {
    return this.http
      .get(
        `${this.host}/offers/${id}`,
        { withCredentials: true }
      )
      .toPromise();
  }

  listOffers() {
    return this.http
      .get(
        `${this.host}/offers`,
        { withCredentials: true }
      )
      .toPromise();
  }

  acceptOffer(id:string) {
    return this.http
      .post(
        `${this.host}/transactions/${id}`,
        { id },
        { withCredentials: true }
      )
      .toPromise();
  }

  receiveNFT(id:string) {
    return this.http
      .post(
        `${this.host}/transactions/${id}/nft`,
        { id },
        { withCredentials: true }
      )
      .toPromise();
  }

  receivePayment(id:string) {
    return this.http
      .post(
        `${this.host}/transactions/${id}/payment`,
        { id },
        { withCredentials: true }
      )
      .toPromise();
  }

  approveTransaction(id:string) {
    return this.http
      .post(
        `${this.host}/transactions/${id}/approve`,
        { id },
        { withCredentials: true }
      )
      .toPromise();
  }

}
