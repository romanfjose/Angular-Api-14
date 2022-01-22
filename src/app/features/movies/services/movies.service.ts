import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { moviesMock } from './movies.mock';

@Injectable()
export class MoviesService {

  private url = environment.moviesRestApi;

  constructor() { }

  getDetail(id: string): Observable<Movie | undefined> {
    return of(moviesMock.find(movie => movie.id === id ))
  }

  getList(): Observable<Movie[]> {
    return of(moviesMock);
  }
}
