import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erreurConnexion: string='';

  constructor(private http: HttpClient, private router: Router) { }

  login(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      const body = {
        mail: email,
        mdp: password
      };

      this.http.post('https://harena-1-nicolas-10-api.onrender.com/user/signin', body, { observe: 'response' })
        .subscribe((response: HttpResponse<any>) => {
          console.log(response.status);
          if (response.status === 200) {
            this.router.navigate(['/listeMatiere/:idEtudiant']);
          } 
        }, error => {
          console.error(error);
          this.erreurConnexion = 'Erreur de connexion';
        });
    }
  }
}