import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../../pages/home/home.component';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/vedios', component: HomeComponent },
  { path: '/news', component: HomeComponent },
  { path: '/pictures', component: HomeComponent },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = [
    { title: 'One', fragment: 'one' },
    { title: 'Two', fragment: 'two' }
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
