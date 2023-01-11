import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
