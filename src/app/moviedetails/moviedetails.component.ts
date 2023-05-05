import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id:string = '';
  type: string | undefined= ''
  details:any = {};
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) {
    this.type = _ActivatedRoute.snapshot.routeConfig?.['path']?.split('/')[0];
    this.id =  _ActivatedRoute.snapshot.params['id'];
    _MoviesService.getDetails(this.id, this.type).subscribe((response)=> {
      console.log(response)
      this.details = response;
    })
    
  }



  ngOnInit(): void {
  }

}
