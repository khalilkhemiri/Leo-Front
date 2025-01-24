import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-membre',
  templateUrl: './historique-membre.component.html',
  styleUrls: ['./historique-membre.component.scss']
})
export class HistoriqueMembreComponent implements OnInit {
  transactions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCaisseHistory();
  }

  loadCaisseHistory() {
    // Appel HTTP directement dans le composant
    this.http.get<any[]>('https://leo-backend-94kg.onrender.com/rafraichir_caisse_membre')
      .subscribe(
        data => {
          // Mettez à jour les transactions avec les données récupérées
          this.transactions = data;
        },
        error => {
          console.error('Erreur lors de la récupération des données:', error);
        }
      );
  }
}
