import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CotisationComponent } from './pages/cotisation/cotisation.component';
import { CaisseMembreComponent } from './pages/caisse-membre/caisse-membre.component';
import { TransactionActionComponent } from './pages/transaction-action/transaction-action.component';
import { HistoriqueMembreComponent } from './pages/historique-membre/historique-membre.component';
import { HistoriqueCotisationComponent } from './pages/historique-cotisation/historique-cotisation.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CotisationComponent,
    CaisseMembreComponent,
    TransactionActionComponent,
    HistoriqueMembreComponent,
    HistoriqueCotisationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
