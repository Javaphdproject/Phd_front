import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanningPreincriptionDTO } from './planning-preinscription.dto';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = 'http://localhost:8089/phd/planning';

  constructor(private http: HttpClient) {}

  createPlanning(planningDTO: PlanningPreincriptionDTO): Observable<PlanningPreincriptionDTO> {
    return this.http.post<PlanningPreincriptionDTO>(`${this.apiUrl}/create`, planningDTO);
  }

  getAllPlannings(): Observable<PlanningPreincriptionDTO[]> {
    return this.http.get<PlanningPreincriptionDTO[]>(`${this.apiUrl}/get`);
  }
}
