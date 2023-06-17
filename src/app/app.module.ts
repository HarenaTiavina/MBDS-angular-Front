import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { DetailsMatiereComponent } from './details-matiere/details-matiere.component';

const routes: Routes = [
  {
    path: 'detailsMatiere/:idMatiere',
    component: DetailsMatiereComponent
  },
  {
    path: 'listeMatiere/:idEtudiant',
    component: ListeMatiereComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListeMatiereComponent,
    DetailsMatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
