import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientlistserviceService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]> {
    const apiUrl = 'http://localhost:56272/api/Employee'; 
    return this.http.get<any[]>(apiUrl);
  }
}
