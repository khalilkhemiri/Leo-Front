import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
    isOpen?: boolean;
}
export const PERS: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ni-tv-2 text-primary',  // Unicône pour Dashboard, TV
    class: '',
  },
  {
    path: '/',
    title: 'Caisse Membre',
    icon: 'ni-basket text-red',  // Représente la caisse (wallet)
    class: '',
    isOpen: false,
    children: [
      { 
        path: '/Cotisation', 
        title: 'Cotisation',  
        icon: 'ni-credit-card text-blue',  // Carte de crédit pour les cotisations
        class: '' 
      },
      { 
        path: '/membre', 
        title: 'Transaction',  
        icon: 'fa fa-exchange-alt text-orange',  // Flèche circulaire pour symboliser une transaction
        class: '' 
      },
      { 
        path: '/Hmembre', 
        title: 'Historique Général',  
        icon: 'ni-time-alarm text-red',  // Horloge pour l'historique
        class: '' 
      },
      { 
        path: '/Hcotisation', 
        title: 'Historique Cotisation',  
        icon: 'ni-time-alarm text-red',  // Archive pour les cotisations passées
        class: '' 
      },
    ]
  },
  {
    path: '/',
    title: 'Caisse Action',
    icon: 'ni-box-2 text-green',  // Boîte d'actions pour symboliser les actions dans la caisse
    class: '',
    isOpen: false,
    children: [
      { 
        path: '/transaction-action', 
        title: 'Transaction caisse action',  
        icon: 'ni-money-coins text-yellow',  // Icône de monnaie pour les transactions
        class: '' 
      },
    ]
  },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public personel: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.personel = PERS.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
  toggleMenu(menuItem: RouteInfo) {
    if (menuItem.children) {
      menuItem.isOpen = !menuItem.isOpen;
    } else {
      console.log('Navigating to:', menuItem.path);
      this.router.navigate([menuItem.path]);
    }
  }
}
