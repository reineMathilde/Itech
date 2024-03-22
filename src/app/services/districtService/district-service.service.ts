import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { District, Region } from 'src/app/models/Models';

@Injectable({
  providedIn: 'root'
})
export class DistrictServiceService {
  private SERVER_URL = environment.serverUrl;

  constructor(private http: HttpClient) { }

  
  public getDistrictNames(): Observable<Region> {
    return this.http.get<Region>(`${this.SERVER_URL}/api/region/getAll`);
  }


}
