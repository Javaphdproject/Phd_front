import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavComponent } from './home/nav/nav.component';
import { CandidatComponent } from './users/candidat/candidat.component';
import { ProfesseurComponent } from './users/professeur/professeur.component';
import { CEDComponent } from './users/ced/ced.component';
import { SidebarComponent } from './users/CED/sidebar/sidebar.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    CandidatComponent,
    ProfesseurComponent,
    CEDComponent,
    SidebarComponent,
  ],
})
export class PagesModule {
}
