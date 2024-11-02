import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CedService } from 'src/app/service/ced.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// etablissement.model.ts
export class Etablissement {
  idEtablissement?: number;
  nomEtablissement: string;
  adresseEtablissement: string;
  ville: string;
  idCED?: number;

  constructor() {
    this.nomEtablissement = '';
    this.adresseEtablissement = '';
    this.ville = '';
    this.idCED = 0;
  }
}
export class Structure {
  typeStructure: string;
  nom: string;
  idEtablissement: number;

  constructor() {
    this.typeStructure = '';
    this.nom = '';
    this.idEtablissement = 0;
  }
}
export class Professeur {
  prenom: string;
  nom: string;
  email: string;
  password: string;
  tel: string;
  adresse: string;
  grade: string;
  idEtablissement?: number;
  idStructureRecherche?: number;

  constructor() {
    this.prenom = '';
    this.nom = '';
    this.email = '';
    this.password = '';
    this.tel = '';
    this.adresse = '';
    this.grade = '';
    this.idEtablissement = 0;
    this.idStructureRecherche = 0;
  }
}
@Component({
  selector: 'app-structure-de-recherche',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, MatCardModule, MatTableModule],
  templateUrl: './structure-de-recherche.component.html',
  styleUrl: './structure-de-recherche.component.scss'
})
export class StructureDeRechercheComponent {

  ceds : any[] = [];
  idCED =1;
  selectedCedId: number | null = null;
  etablissements: any[] = [];
  structures: any[] = [];
  professeurs: any[] = [];
  selectedEtablissementId: number | null = null;
  selectedStructureId: number | null = null;
  selectedProfessors: { [key: number]: any[] | null } = {};

  constructor(private cedService: CedService, private http : HttpClient) {};

  ngOnInit(): void {
    // this.fetchAllCeds();
    // this.fetchAllEtablissements();

    this.loadEtablissements();
  }


  // loadEtablissements() {
  //   const idCED = 1;
  //   this.cedService.getAllEtablissements(idCED).subscribe(data => {
  //     this.etablissements = data;
  //     console.log('Etablissements:', this.etablissements);
  //   });
  // }



  loadEtablissements(): void {
    const idCED =1;
    this.cedService.getAllEtablissements(idCED).subscribe(data => {
      this.etablissements = data;
      console.log( this.etablissements);
    });
  }

  onEtablissementSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const idEtablissement = Number(target.value);
    this.selectedEtablissementId = idEtablissement;

    if (idEtablissement) {
      this.cedService.getStructuresByEtablissement(idEtablissement).subscribe(data => {
        this.structures = data;
        console.log(this.structures);
      });
    } else {
      this.structures = [];
    }
  }


  onStructureSelect(idStructure: number): void {
    console.log('Selected structure:', idStructure);
    this.selectedStructureId = idStructure;
    this.cedService.getProfesseursByStructure(idStructure).subscribe(data => {
      this.selectedProfessors[idStructure] = data.length > 0 ? data : null;
      console.log(this.selectedProfessors);
    });
  }




  // onEtablissementSelect(idEtablissement: number) {
  //   idEtablissement = 1;
  //   console.log('Selected etablissement:', idEtablissement);
  //   this.selectedEtablissementId = idEtablissement;
  //   this.cedService.getStructuresByEtablissement(idEtablissement).subscribe(data => {
  //     this.structures = data;
  //     this.professeurs = []; // Clear previous professors
  //     this.selectedStructureId = null; // Reset selected structure
  //     console.log('Structures:', this.structures);
  //   });
  // }

  // onStructureSelect(idStr: number) {
  //   this.selectedStructureId = idStr;
  //   this.cedService.getProfesseursByStructure(idStr).subscribe(data => {
  //     this.professeurs = data;
  //     console.log('Professeurs:', this.professeurs);
  //   });
  // }
















  // fetchAllCeds():void{
  //   this.cedService.getAllCed()
  //     .subscribe((data: any[]) => this.ceds = data);
  //     console.log("hey");
  //   console.log("hey" , this.ceds);
  // }
  fetchAllCeds():void{
    this.cedService.getAllCed()
      .subscribe(
        (response: any) => {
        this.ceds = response;
        console.log('CEDs fetched:', this.ceds);
      },
      (error) => {
        console.error('Error fetching CEDs:', error);
      }
      );
      console.log("hey");
    console.log("hey" , this.ceds);
  }

  fetchAllEtablissements():void{
    this.cedService.getAllEtablissemnt()
      .subscribe(
        (response: any) => {
        this.etablissements = response;
      },
      (error) => {
        console.error('Error fetching CEDs:', error);
        // alert('Failed to fetch CEDs.'); // Alert on error
      }
      );
      console.log("hey");
    console.log("hey" , this.ceds);
  }


   onCEDSelect():void{
    if(this.selectedCedId){
      console.log("hh" , this.selectedCedId)
      this.cedService.getAllEtablissemntByCEd(this.selectedCedId)
      .subscribe(
        (response: any) => {
        this.etablissements = response;
      console.log(this.etablissements)
      },
      (error) => {
        console.error('Error fetching CEDs:', error);
        // alert('Failed to fetch CEDs.'); // Alert on error
      }
      );
    }else{
      this.etablissements =[];
    }
   }

  // fetchAllCeds(): void {
  //   this.http.get<any[]>('http://localhost:8089/phd/auth/users/ced/get-all-etablissement', { responseType: 'json' })
  //     .subscribe(
  //       (response: any) => {
  //         this.ceds = response;
  //         console.log('CEDs fetched:', this.ceds);
  //         alert('CEDs fetched successfully!'); // Notify upon success
  //       },
  //       (error) => {
  //         console.error('Error fetching CEDs:', error);
  //         alert('Failed to fetch CEDs.'); // Alert on error
  //       }
  //     );
  // }




  isModalOpen = false;
  isStrModalOpen=false;
  isProfModalOpen = false;
  etablissement: Etablissement = new Etablissement();
  structure: Structure = new Structure();
  professeur: Professeur = new Professeur();

  onSubmit() {
    // console.log('Form submitted:', this.etablissement, this.structure, this.professeur);
    if (this.etablissement) {
      // Submit Etablissement data
      this.cedService.addEtablissement(this.idCED,this.etablissement).subscribe(
        (newEtablissement: any) => {
          this.etablissement.idCED = 1;
          console.log('Etablissement added:', newEtablissement);
        },
        (error: any) => {
          console.error('Error adding Etablissement:', error);
        }
      );
    } else if (this.structure) {
      // Submit Structure data
      this.cedService.addStructure(this.idCED,this.structure).subscribe(
        (newStr: any) => {
          console.log('Structure added:', newStr);
          this.structure.idEtablissement = this.selectedEtablissementId || 0;

        },
        (error: any) => {
          console.error('Error adding Structure:', error);
        }
      );
    } else if (this.professeur) {

      this.cedService.addProfesseur(this.idCED,this.professeur).subscribe(
        (newProf: any) => {
          this.professeur.idEtablissement = this.selectedEtablissementId || 0;
          this.professeur.idStructureRecherche = this.selectedStructureId || 0;

        },
        (error: any) => {
          console.error('Error adding Professeur:', error);
        }
      );
    }
    this.etablissement.idCED = 1;
    this.structure.idEtablissement = this.selectedEtablissementId || 0;
    this.professeur.idEtablissement = this.selectedEtablissementId || 0;
    this.professeur.idStructureRecherche = this.selectedStructureId || 0;

    console.log('Form submitted:', this.etablissement, this.structure, this.professeur);

    this.close(); // Close the modal after submission
  }






  close() {
    if(this.isModalOpen){
      this.isModalOpen = false;
    }
    else if(this.isStrModalOpen){
      this.isStrModalOpen = false;
    }

    else if(this.isProfModalOpen){
      this.isProfModalOpen = false;
    }



    this.resetForm();
  }

  resetForm() {
    this.etablissement = new Etablissement();
    this.professeur = new Professeur();
    this.structure = new Structure();
  }
}
