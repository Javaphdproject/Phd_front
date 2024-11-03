import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CEDComponent } from './Users-dashboards/ced/ced.component';
import { CandidateComponent } from './Users-dashboards/candidate/candidate.component';
import { ProfesseurComponent } from './Users-dashboards/professeur/professeur.component';
import { PreinscriptionComponent } from './Users-dashboards/ced/preinscription/preinscription.component';
import { ChoisirSujetComponent } from './Users-dashboards/candidate/choisir-sujet/choisir-sujet.component';
import { CandidatureComponent } from './Users-dashboards/candidate/candidature/candidature.component';
import { ConvocationComponent } from './Users-dashboards/candidate/convocation/convocation.component';
import { DemandeBourseComponent } from './Users-dashboards/candidate/demande-bourse/demande-bourse.component';
import { MesSujetsComponent } from './Users-dashboards/professeur/mes-sujets/mes-sujets.component';
import { MesPlanningsComponent } from './Users-dashboards/professeur/mes-plannings/mes-plannings.component';
import { EntretiensComponent } from './Users-dashboards/professeur/entretiens/entretiens.component';
import { MesDoctorantsComponent } from './Users-dashboards/professeur/mes-doctorants/mes-doctorants.component';
import { CreatePlanningComponent } from './create-planning/create-planning.component';
import { DisplayPlanningComponent } from './display-planning/display-planning.component';


const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},

      //login
      {path:"login", component:LoginComponent},
      {path:"register", component:RegisterComponent},
      {path:"acceuil", component:AcceuilComponent},

      //dash CED
      {path:"users/ced", component:CEDComponent},
      {path:"users/ced/preinscription", component:PreinscriptionComponent},
      {path:"users/ced/preinscription", component:PreinscriptionComponent},
      {path:"users/ced/preinscription", component:PreinscriptionComponent},
      { path: "create-planning", component: CreatePlanningComponent },
      { path: "display-planning", component: DisplayPlanningComponent },


      //dash candidate
      {path:"users/candidate", component:CandidateComponent},
      { path: "users/candidate/sujet", component: ChoisirSujetComponent },
      { path: "users/candidate/candidature", component: CandidatureComponent },
      { path: "users/candidate/convocation", component: ConvocationComponent },
      { path: "users/candidate/bourse", component: DemandeBourseComponent },


      //dash professeur
      {path:"users/professeur", component:ProfesseurComponent},
      {path:"users/professeur/MesSujets", component:MesSujetsComponent},
      {path:"users/professeur/MesPlannings", component:MesPlanningsComponent},
      {path:"users/professeur/entretiens", component:EntretiensComponent},
      {path:"users/professeur/MesDoctorants", component:MesDoctorantsComponent}




    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
