import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  id: string = '';

  constructor() { }

  logIn(eEmail: string , eMdp: string) {
    console.log("ON SE LOGGE")
    if(eEmail === "michel.buffa@gmail.com" && eMdp === "michel"){
      this.id = 'admin';
      this.loggedIn = true;
    } 
    if(eEmail === "prof@gmail.com" && eMdp === "prof"){
      this.id = 'prof';
      this.loggedIn = true;
    } 
    if (eEmail === "harena.andriamahatony@gmail.com" && eMdp ==="harena"){
      this.id = "eleve";
      this.loggedIn = true;
    }
  }

  logOut() {
    console.log("ON SE DELOGGE")
    this.id = '';
    this.loggedIn = false;
  }
}
