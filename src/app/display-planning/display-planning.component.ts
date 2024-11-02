import { Component, OnInit } from '@angular/core';
import { PlanningService } from '../planning.service';
import { PlanningPreincriptionDTO } from '../planning-preinscription.dto';

@Component({
  selector: 'app-display-planning',
  templateUrl: './display-planning.component.html',
  styleUrls: ['./display-planning.component.scss'] // Ensure this path is correct
})
export class DisplayPlanningComponent implements OnInit {
  plannings: PlanningPreincriptionDTO[] = [];

  constructor(private planningService: PlanningService) {}

  ngOnInit(): void {
    this.getAllPlannings();
  }

  getAllPlannings() {
    this.planningService.getAllPlannings().subscribe(data => {
      this.plannings = data;
    }, error => {
      console.error('Error fetching plannings:', error);
    });
  }
}
