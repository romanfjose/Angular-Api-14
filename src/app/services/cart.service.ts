import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  url = environment.cartRestApi;

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  addMovie(movie: Movie) {

  }

  removeMovie(movie: Movie) {
    // tengo que remover del array el movie que coincida
  }
}
