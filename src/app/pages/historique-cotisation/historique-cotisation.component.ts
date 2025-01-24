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
    this.http.get<any[]>('https://leo-backend-94kg.onrender.com/rafraichir_cotisations')
      .subscribe(
        data => {
          console.log('Cotisations received:', data); 
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