import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { MarketComponent } from './pages/market/market.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  { path: "logIn", component: LogInComponent},
  { path: "register", component: RegisterComponent},
  { path: "profile", component: ProfileComponent},
  { path: "market", component: MarketComponent},
  { path: "offers", component: OffersComponent},
  { path: "trade", component: TradePageComponent},
  { path: "transactions", component: TransactionsComponent},
  { path: "", redirectTo: "/logIn", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
