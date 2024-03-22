import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Analysis } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisServiceService {
  private SERVER_URL = environment.serverUrl;

  constructor(private http: HttpClient) { }

    
  public getAnalysisInferieurmill(): Observable<number> {
    return this.http.get<number>(`${this.SERVER_URL}/analysis/count/inferieurmil`);
  }


  
    
  public getAnalysisInferieurll(): Observable<number> {
    return this.http.get<number>(`${this.SERVER_URL}/analysis/count/inferieurll`);
  }

 

      
  public getAnalysisSuperieuregal(): Observable<any> {
    return this.http.get<number>(`${this.SERVER_URL}/analysis/count/supegal`);
  }

 
      
  public getAnalysisViraleLoadInvalide(): Observable<number> {
    return this.http.get<number>(`${this.SERVER_URL}/analysis/count/viraleLoadInvalide`);
  }
  


}
