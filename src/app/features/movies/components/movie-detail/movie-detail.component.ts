import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.moviesService.getDetail(this.activatedRoute.snapshot.params['id'])
    .subscribe(
      //movie => this.cartService.addMovie(movie as Movie)
    );

    this.cartService.getList().subscribe(
      list => console.log(list)

    )
  }
}
