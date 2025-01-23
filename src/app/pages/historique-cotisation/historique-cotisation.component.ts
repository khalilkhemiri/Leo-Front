import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-cotisation',
  templateUrl: './historique-cotisation.component.html',
  styleUrls: ['./historique-cotisation.component.scss']
})
export class HistoriqueCotisationComponent implements OnInit {
  cotisations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCotisations();
  }

  loadCotisations() {
    // Appel HTTP pour récupérer les cotisations
    this.http.get<any[]>('http://192.168.2.1:8080/rafraichir_cotisations')
      .subscribe(
        data => {
          // Mettez à jour les cotisations avec les données récupérées
          this.cotisations = data;
        },
        error => {
          console.error('Erreur lors de la récupération des cotisations:', error);
        }
      );
  }

  // Calcul du pourcentage payé
  calculatePercentage(cotisation: number): number {
    const targetAmount = 40;
    return (cotisation / targetAmount) * 100;
  }
}