import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NgModule} from "@angular/core";
const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
