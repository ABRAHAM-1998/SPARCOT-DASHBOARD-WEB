import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './NAV-BARS-HOME/sidenavbar/sidenavbar.component';

// +++++++++++++++++++++==============imported++++++++++++++++++++++
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";;
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
// ++++++++++++++++++++++bootsrap================-===========================++++
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderListComponent } from './COMPONENTS-PRIMARY/order-list/order-list.component';
import { LoginComponent } from "./COMPONENTS-PRIMARY/login/login.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ==================AUTHGUARD==============================
import { AuthGuardService, UserService, AlwaysAuthGuard, AlwaysAuthChildrenGuard, OnlyLoggedInUsersGuard, } from "src/app/API_SERV/auth-guard.service";
import { AdminauthGuard } from 'src/app/API_SERV/adminauth.guard';
import { ApicallservService } from "src/app/API_SERV/apicallserv.service";
import { DashboardComponent } from './COMPONENTS-PRIMARY/dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import { ProductListComponent } from './COMPONENTS-PRIMARY/product-list/product-list.component';
import { WildpageComponent } from './NAV-BARS-HOME/wildpage/wildpage.component'




@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    OrderListComponent,
    LoginComponent,
    DashboardComponent,
    ProductListComponent,
    WildpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,


    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    CommonModule,


    NgbModule,
    ChartsModule,
    MatTableModule

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,



    NgbModule,
  ],
  providers: [
    AuthGuardService,
    UserService,
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    OnlyLoggedInUsersGuard,
    AdminauthGuard,
    ApicallservService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
