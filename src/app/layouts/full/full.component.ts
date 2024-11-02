import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}
const roles = {
  ced: '/users/ced',
  candidate: '/users/candidate',
  professeur: '/users/professeur'
};

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],

})
export class FullComponent {
//le role pour afficher dash convenable
  user: string = "";

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    hideComponenets: boolean = false; // hide sidebar
    drawer: any;
    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const noSidebarRoutes = ['/login', '/register'];
          this.hideComponenets = noSidebarRoutes.includes(event.urlAfterRedirects);

          this.user = this.router.url;
          console.log(this.user);
        }
      });


     }
  routerActive: string = "activelink";

  ngOnInit() {
    if (this.user == roles.ced) {
      this.sidebarMenu = [
        {
          link: "/users/ced",
          icon: "home",
          menu: "Dashboard ced",
        },
        {
          link: "/users/ced/structure",
          icon: "file-text",
          menu: "Structures de Recherche", // section pour voir les sturctures de recherche et les sujts par etablissment
        },
        {
          link: "/users/ced/preinscription",
          icon: "layout",
          menu: "Les préinscriptions", // le statut de chaque préinscription
        },
        {
          link: "/menu",
          icon: "menu",
          menu: "Liste des convoqués", // liste des candidats convoqués
        },
        {
          link: "/users/ced/formalite",
          icon: "divide-circle",
          menu: "Formalités administratives", // les formalités administratives
        },
        {
          link: "/slider",
          icon: "layers",
          menu: "Les bourses",
        },
       

      ];
    }
    else if (this.user == roles.candidate) {
      this.sidebarMenu = [
        {
          link: "/users/candidate",
          icon: "home",
          menu: "Dashboard Candidate",
        },
        {
          link: "/users/candidate/sujet",
          icon: "disc",
          menu: "Choix des Sujets",
        },
        {
          link: "/users/candidate/candidature",
          icon: "layout",
          menu: "Mes Candidature",
        },
        {
          link: "/users/candidate/convocation",
          icon: "menu",
          menu: "Convocations",
        },
        {
          link: "/users/candidate/bourse",
          icon: "divide-circle",
          menu: "Demande de Bourse",
        },
      ];
    }
    else if (this.user == roles.professeur) {
      this.sidebarMenu = [
        {
          link: "/users/professeur",
          icon: "home",
          menu: "Dashboard",
        },
        {
          link: "/users/professeur/MesSujets",
          icon: "disc",
          menu: "Mes Sujets",
        },
        {
          link: "/users/professeur/MesPlannings",
          icon: "disc",
          menu: "Mes Plannings",
        },
        {
          link: "/users/professeur/entretiens",
          icon: "layout",
          menu: "Les Candidats Convoques",
        },
        {
          link: "/users/professeur/MesDoctorants",
          icon: "menu",
          menu: "Suivi des Doctorants",
        },
      ];
    }
    else  {
      this.sidebarMenu = [
        {
              link: "/home",
              icon: "home",
              menu: "Dashboard",
            },
            {
              link: "/button",
              icon: "disc",
              menu: "Buttons",
            },
            {
              link: "/forms",
              icon: "layout",
              menu: "Forms",
            },
            {
              link: "/alerts",
              icon: "info",
              menu: "Alerts",
            },
            {
              link: "/grid-list",
              icon: "file-text",
              menu: "Grid List",
            },
            {
              link: "/menu",
              icon: "menu",
              menu: "Menus",
            },
            {
              link: "/table",
              icon: "grid",
              menu: "Tables",
            },
            {
              link: "/expansion",
              icon: "divide-circle",
              menu: "Expansion Panel",
            },
            {
              link: "/chips",
              icon: "award",
              menu: "Chips",
            },
            {
              link: "/tabs",
              icon: "list",
              menu: "Tabs",
            },
            {
              link: "/progress",
              icon: "bar-chart-2",
              menu: "Progress Bar",
            },
            {
              link: "/toolbar",
              icon: "voicemail",
              menu: "Toolbar",
            },
            {
              link: "/progress-snipper",
              icon: "loader",
              menu: "Progress Snipper",
            },
            {
              link: "/tooltip",
              icon: "bell",
              menu: "Tooltip",
            },
            {
              link: "/snackbar",
              icon: "slack",
              menu: "Snackbar",
            },
            {
              link: "/slider",
              icon: "sliders",
              menu: "Slider",
            },
            {
              link: "/slide-toggle",
              icon: "layers",
              menu: "Slide Toggle",
            },
      ];
    }
  }
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
  goToEditProfile(): void {
    this.router.navigate(['/edit']); // Navigate to EditProfileComponent
  }
  sidebarMenu: sidebarMenu[] = [];
}