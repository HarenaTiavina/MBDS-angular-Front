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
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { ListeDevoirComponent } from './liste-devoir/liste-devoir.component';
import { DetailsDevoirComponent } from './details-devoir/details-devoir.component';
import { HttpClientModule } from '@angular/common/http';
import { CreationDevoirComponent } from './creation-devoir/creation-devoir.component';

const routes: Routes = [
  {
    path: 'createDevoir/:idMatiere',
    component: CreationDevoirComponent
  },
  {
    path: 'detailsDevoir/:idDevoir',
    component: DetailsDevoirComponent
  },
  {
    path: 'listeDevoirs/:idProf',
    component: ListeDevoirComponent
  },
  {
    path: 'listeCours/:idProf',
    component: ListeCoursComponent
  },
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
    DetailsMatiereComponent,
    ListeCoursComponent,
    ListeDevoirComponent,
    DetailsDevoirComponent,
    CreationDevoirComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
