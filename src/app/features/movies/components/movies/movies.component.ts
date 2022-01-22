import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getList().subscribe( movies => this.movies = movies);
  }

  navigateToDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }

}
