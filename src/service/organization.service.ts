import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  organizationData(){

    let  organization =  [
      {  id:  1,  title:  'Organization 1', description: 'Organization1@email.com', organisation_id: 1 },
      {  id:  2,  title:  'Organization 2', description: 'Organization2@email.com', organisation_id: 1 },
      {  id:  3,  title:  'Organization 3', description: 'Organization3@email.com', organisation_id: 1 },
      {  id:  4,  title:  'Organization 4', description: 'Organization4@email.com', organisation_id: 1 }
    ];
 
    return {organization};
 
   }

  saveOrganization(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}`, data);
  }

  updateOrganization(id: number| string,data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${id}`,data);
  }

  deleteOrganization(id: number | any) {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }

  getOrganizationList() {
    return this.http.get(`${environment.apiUrl}`);
  }

  getOrganizationData(id: number) {
    return this.http.get(`${environment.apiUrl}/${id}`);
  }
}
