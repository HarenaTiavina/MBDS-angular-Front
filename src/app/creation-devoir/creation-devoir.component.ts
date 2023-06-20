import { Component } from '@angular/core';

@Component({
  selector: 'app-creation-devoir',
  templateUrl: './creation-devoir.component.html',
  styleUrls: ['./creation-devoir.component.css']
})
export class CreationDevoirComponent {

  titre: string = '';
  fichier: File | undefined;

  submitForm() {
    console.log('Titre :', this.titre);
    console.log('Fichier :', this.fichier);
  }

  onFileChange(event: any) {
    this.fichier = event.target.files[0];
  }
}
