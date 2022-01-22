import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { AppModule } from '../app.module';
import { Persona } from '../models/persona.model';
// import { personasMock } from './persona.mock';

@Injectable(
  {
    providedIn: 'root'
    //providedIn: AppModule
  }
)
export class PersonService {

  private url = environment.moviesRestApi + 'persons';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url);
  }

  getById(id: string): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.url}/${id}`);
  }
}
