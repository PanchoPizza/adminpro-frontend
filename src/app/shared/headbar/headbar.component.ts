import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styles: [
  ]
})
export class HeadbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  out(){
    localStorage.removeItem('token');
  }

}
