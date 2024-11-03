import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { CedService } from 'src/app/service/ced.service';


export interface CandidatEntretienDTO {
  idEntretien: number;
  candidateName: string;
  candidatePrenom: string;
  date: string;
  resultat: string;
  status: string;
  idCandidat: number;
  rendezVousDate :string;
}


export interface candidature {
  idcandidature: number;
  etatCandidature: string;
  idCandidat: number;
  idsujet: number;
  candidatName: string;

}
@Component({
  selector: 'app-formalite-administrative',
  standalone: true,
  imports: [
    MatTableModule,
    RouterModule,
    FeatherModule,
    MatSidenavModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox,
    CommonModule,
    MatTableModule,
    MatButtonModule

  ],  templateUrl: './formalite-administrative.component.html',
  styleUrl: './formalite-administrative.component.scss'
})
export class FormaliteAdministrativeComponent {
  acceptedCandidates: CandidatEntretienDTO[] = [];
  constructor(private cedService: CedService, private http: HttpClient, private router :Router) {}


  isStrModalOpen = false; // Modal state
  dateEntretien: string =''; // To hold the input date
  currentEntretienId: number =0; // To hold the ID of the current entretien


  ngOnInit(): void {
    this.loadAcceptedCandidates();

  }

  // viewDetails(candidateId: number): void {
  //   console.log("Viewing details for candidate with ID:", candidateId);
  //   this.router.navigate(['/users/ced/candidat', candidateId]);
  // }









  // loadAcceptedCandidates(): void {
  //   this.cedService.getAcceptedCandidates().subscribe(
  //     (data: CandidatEntretienDTO[]) => {
  //       this.acceptedCandidates = data;
  //       console.log(this.acceptedCandidates);
  //     },
  //     (error) => {
  //       console.error('Error fetching accepted candidates', error);
  //     }
  //   );
  // }



  loadAcceptedCandidates(): void {
    this.cedService.getAcceptedCandidates().subscribe(
      (data: CandidatEntretienDTO[]) => {
        this.acceptedCandidates = data;
        // Fetch rendezvous for each entretien
        this.acceptedCandidates.forEach(candidate => {
          this.fetchRendezVous(candidate.idEntretien);
        });
        console.log(this.acceptedCandidates);
      },
      (error) => {
        console.error('Error fetching accepted candidates', error);
      }
    );
  }
  
  // Method to fetch rendezvous for a specific entretien
  fetchRendezVous(idEntretien: number): void {
    this.cedService.getRendezVousForEntretien(idEntretien).subscribe(
      (rendezVousDate: string) => {
        // Assuming the rendezVousDate is in the format you need
        const candidate = this.acceptedCandidates.find(c => c.idEntretien === idEntretien);
        if (candidate) {
          candidate.rendezVousDate = rendezVousDate; // Add rendezvous date to candidate
        }
      },
      (error) => {
        console.error(`Error fetching rendezvous for entretien ${idEntretien}`, error);
      }
    );
  }
  

  viewDetails(idEntretien: number): void {
    console.log('Viewing details for candidate with interview ID:', idEntretien);
  }

  openModal(idEntretien: number): void {
    this.currentEntretienId = idEntretien; // Store the current entretien ID
    this.isStrModalOpen = true; // Open the modal
  }

  close(): void {
    this.isStrModalOpen = false; // Close the modal
    this.dateEntretien = ''; // Reset the date input
  }

  onSubmit(): void {
    console.log('Submitting date:', this.dateEntretien, 'for entretien ID:', this.currentEntretienId);
    // Call your service to save the date here
    // Example:
    // this.cedService.addDateToEntretien(this.currentEntretienId, this.dateEntretien).subscribe(response => {
    //   // Handle success
    //   this.close(); // Close the modal after submission
    // }, error => {
    //   console.error('Error submitting date', error);
    // });
  }
}
