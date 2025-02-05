import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  totalEntrees: number = 0;
  totalSorties: number = 0;
  solde: number = 0;
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getDashboardCaisseData();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }
  getDashboardCaisseData(): void {
    this.http.get<any>('https://leo-backend-94kg.onrender.com/dashboard_caisse_action')
      .subscribe(
        (response) => {
          this.totalEntrees = response.total_entrees;
          this.totalSorties = response.total_sorties;
          this.solde = response.solde;
        },
        (error) => {
          console.error('Error fetching dashboard data:', error);
          alert('Erreur lors de la récupération des données du tableau de bord.');
        }
      );
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
