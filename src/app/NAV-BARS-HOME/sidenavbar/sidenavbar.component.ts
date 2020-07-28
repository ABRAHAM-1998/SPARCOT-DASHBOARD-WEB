import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  fn_logout(){
    localStorage.clear();
    this.route.navigate(['login']);
  }


}
