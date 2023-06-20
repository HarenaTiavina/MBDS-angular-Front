import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erreurConnexion: string='';

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) { }

  login(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      console.log(email);
      console.log(password);
      this.authService.logIn(email,password);
      if(!this.authService.loggedIn){
        this.erreurConnexion = 'erreur de connexion';
      } else {
        if(this.authService.id === 'admin'){
          this.router.navigate(["/"]);
        }
        if(this.authService.id === 'prof'){
          this.router.navigate(["/listeCours/:idProf"]);
        }
        if(this.authService.id === 'eleve'){
          this.router.navigate(["/listeMatiere/:idEtudiant"]);
        }
      }
    }
  }

  
}