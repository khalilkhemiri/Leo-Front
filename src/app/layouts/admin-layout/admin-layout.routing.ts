import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CotisationComponent } from 'src/app/pages/cotisation/cotisation.component';
import { CaisseMembreComponent } from 'src/app/pages/caisse-membre/caisse-membre.component';
import { TransactionActionComponent } from 'src/app/pages/transaction-action/transaction-action.component';
import { HistoriqueMembreComponent } from 'src/app/pages/historique-membre/historique-membre.component';
import { HistoriqueCotisationComponent } from 'src/app/pages/historique-cotisation/historique-cotisation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Hcotisation',   component: HistoriqueCotisationComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'Hmembre',          component: HistoriqueMembreComponent },
    { path: 'Cotisation',          component: CotisationComponent },
    { path: 'membre',          component: CaisseMembreComponent },
    { path: 'transaction-action',           component: TransactionActionComponent }
];
