import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovie:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/'

  constructor(private _MoviesService:MoviesService) { 
    this._MoviesService.getTrending('movie').subscribe((response)=> {
      this.trendingMovie = response.results.slice(0,10);
      console.log(this.trendingMovie);
    });
      

    this._MoviesService.getTrending('tv').subscribe((response)=> {
      this.trendingTv = response.results.slice(0,10)
    });

    
    this._MoviesService.getTrending('person').subscribe((response)=> {
      this.trendingPeople = response.results.slice(0,10);
    });
    }
    
    
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 8
        }
      },
      nav: true,
      margin: 8
    }

  ngOnInit(): void {
  }

}
export class CarouselHolderComponent {
  
}
