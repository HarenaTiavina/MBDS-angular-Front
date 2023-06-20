import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentRoute:string = "";

  constructor(private authService:AuthService, 
    private router:Router) {
    console.log(router.url);
    console.log(this.authService.id);

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url);
        this.currentRoute = event.url;
      }
    });
  }

  logout(){
    this.authService.logOut();
  }

  isLogged() {
    return this.authService.loggedIn;
  }

  isEtudiant() {
    if(this.authService.id === "eleve"){
      return true;
    } else {
      return false;
    }
  }

  isProf() {
    if(this.authService.id === "prof"){
      return true;
    } else {
      return false;
    }
  }
}
