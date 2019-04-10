import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  constructor(private httpClient: HttpClient) { }

  getMissions() {
    return this.httpClient.get('http://localhost:3000/missions');
  }
}

