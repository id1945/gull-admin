import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  constructor(private store: LocalStoreService, private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.authenticated = true;
    this.store.setItem("demo_login_status", true);
    return of({}).pipe(delay(1500));
  }
  signout() {
    this.authenticated = false;
    this.store.setItem("demo_login_status", false);
    this.router.navigateByUrl("/sessions/signin");
  }
}
