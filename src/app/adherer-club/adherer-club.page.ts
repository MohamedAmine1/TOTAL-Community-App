import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-adherer-club',
  templateUrl: './adherer-club.page.html',
  styleUrls: ['./adherer-club.page.scss'],
})
export class AdhererClubPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
     
  }

  register(form){
    this.router.navigate(['/'])
  }

}
