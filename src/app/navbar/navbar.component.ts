import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchItems = []
  details: any = {};
  isLogin: boolean = false;
  constructor(private _AccessService: AccessService, private _MoviesService:MoviesService) {
    this.details = _AccessService.currentUserInfo;
    _AccessService.currentUserInfo.subscribe(() => {
      if (_AccessService.currentUserInfo.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  logout() {
    this._AccessService.logout();
  }

  search(value: string){
    if(value == '') { this.searchItems = []}
    this._MoviesService.search(value).subscribe((res) => {
      let response:any = res
      if(response.results.length > 0){
        this.searchItems = response.results
          .slice(0, 5)
          .map((item: any) => {
            return {
              name: item.title || item.original_name,
              id: item.id,
              type: "/"+item.media_type,
            };
          });
        }else {
          this.searchItems = []
        }
    });
  }

  ngOnInit(): void {}
}
