import { Component } from '@angular/core';

@Component({
  selector: 'app-details-devoir',
  templateUrl: './details-devoir.component.html',
  styleUrls: ['./details-devoir.component.css']
})
export class DetailsDevoirComponent {
  idUser: string = 'eleve';

  fichierUrl(): string {
    const nom= 'devoir.${this.idUser}.txt';
    return 'assets/${nom}';
  }
}
