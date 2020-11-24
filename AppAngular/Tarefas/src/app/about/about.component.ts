import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  objetivos: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _Data: DataService
  ) {
    this.route.params.subscribe((res) => console.log(res.id));
  }

  ngOnInit() {
    this._Data.objetivo.subscribe((res) => (this.objetivos = res));
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
