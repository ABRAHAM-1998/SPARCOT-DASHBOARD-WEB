import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './COMPONENTS-PRIMARY/order-list/order-list.component';
import { SidenavbarComponent } from './NAV-BARS-HOME/sidenavbar/sidenavbar.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './COMPONENTS-PRIMARY/login/login.component';
import { AuthGuardService ,UserService,AlwaysAuthGuard,AlwaysAuthChildrenGuard ,OnlyLoggedInUsersGuard,} from "src/app/API_SERV/auth-guard.service";
import { AdminauthGuard } from  'src/app/API_SERV/adminauth.guard';
import { DashboardComponent } from './COMPONENTS-PRIMARY/dashboard/dashboard.component';
import { ProductListComponent } from './COMPONENTS-PRIMARY/product-list/product-list.component';
import { WildpageComponent } from './NAV-BARS-HOME/wildpage/wildpage.component';



const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'login',component:LoginComponent , },



  {
    path: 'home',
    component: SidenavbarComponent,
    canActivate:[OnlyLoggedInUsersGuard],
    // canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    // canActivateChild: [AlwaysAuthChildrenGuard],
   
    children: [
      { path: 'order-list', component: OrderListComponent,outlet: 'sidebar' },
      { path: '', component: DashboardComponent,outlet: 'sidebar' },
      { path: 'dashboard', component: DashboardComponent,outlet: 'sidebar' },
      { path: 'product-list', component: ProductListComponent,outlet: 'sidebar' },




  
    ]

  },
  { path:'**' , component:WildpageComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
