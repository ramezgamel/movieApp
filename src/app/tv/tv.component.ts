import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  tvShow: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getTV().subscribe((data) => {
      this.tvShow = data.results;
    });
  }
}
