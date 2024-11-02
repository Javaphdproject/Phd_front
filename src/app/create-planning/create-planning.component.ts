import { Component } from '@angular/core';
import { PlanningService } from '../planning.service';
import { PlanningPreincriptionDTO } from '../planning-preinscription.dto';

@Component({
  selector: 'app-create-planning',
  templateUrl: './create-planning.component.html',
  styleUrls: ['./create-planning.component.scss'] // Ensure this path is correct
})
export class CreatePlanningComponent {
  planning: PlanningPreincriptionDTO = {
    anneeUniversitaire: '',
    titre: '',
    dateReinscription: new Date(),
    dateDepotDossier: new Date(),
    datePropositionSujets: new Date(),
    dateValidationSujets: new Date(),
    dateConvocationEtudiants: new Date(),
    dateAffichageResultats: new Date(),
    dateInscription: new Date(),
    cedId: null
  };

  constructor(private planningService: PlanningService) {}

  createPlanning() {
    this.planningService.createPlanning(this.planning).subscribe(response => {
      console.log('Planning created:', response);
      alert('Planning created successfully!');
    }, error => {
      console.error('Error creating planning:', error);
      alert('Failed to create planning.');
    });
  }
}
