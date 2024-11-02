import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etablissement } from '../Users-dashboards/ced/structure-de-recherche/structure-de-recherche.component';

@Injectable({
  providedIn: 'root'
})
export class CedService {


  private apiUrl = 'http://localhost:8089/phd/auth/users/ced';

  constructor(private http : HttpClient){}

  //get the ceds
  getAllCed():Observable<any[]>{
    // return this.http.get<any[]>(this.apiUrl, { responseType: 'json' });
    return this.http.get<any[]>(`${this.apiUrl}/get-all-ced`,  { responseType: 'json' });
  }

  //get the etablissememnt by ced
  getAllEtablissemnt():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/get-all-etablissement`,  { responseType: 'json' });
  }
  getAllEtablissemntByCEd(selectedCedId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-ced-etablissement/${selectedCedId}`);
  }




//add elements


  getAllEtablissements(idCED: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-ced-etablissement/${idCED}`);
  }

  getStructuresByEtablissement(idEtablissement: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-etablissememnt-str/${idEtablissement}`);
  }

  getProfesseursByStructure(idStr: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-str-prof/${idStr}`);
  }



  private apiUrlGeneral = 'http://localhost:8089/phd/auth/users';

  addEtablissement(CedId: number, etablissement: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrlGeneral}/etablissements/create/${CedId}`, etablissement);
  }

  addStructure(etablissementId: number, structure: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlGeneral}/structures/create/${etablissementId}`, structure);
}

  addProfesseur(CedId: number, professeur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlGeneral}/professeurs/create/${CedId}`, professeur);
}





    //get the candidature
    getAllCandidature():Observable<any[]>{
      return this.http.get<any[]>(`${this.apiUrl}/get-all-candidature`,  { responseType: 'json' });
    }

    updateCandidatureStatus(id: number, status: string): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/update-candidature-status/${id}/${status}`, { status });
    }

    getCandidatById(id: number): Observable<any> {
      return this.http.get<any>(`http://localhost:8089/phd/auth/users/candidat/${id}`,  { responseType: 'json' });
    }

    getFile(filename: string): Observable<Blob> {
      return this.http.get(`${this.apiUrl}/file/${filename}`, { responseType: 'blob' });
  }




  getAcceptedCandidates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getCandidates`, { responseType: 'json' });
  }




  getRendezVousByCandidatId(idCandidat: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rendezvous/candidat/${idCandidat}`);
  }

  getRendezVousForEntretien(idEntretien: number): Observable<string> {
    return this.http.get<string>(`/rendezvous/${idEntretien}`);
  }

}
