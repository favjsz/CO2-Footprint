import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TableComponent } from '../table/table.component';
import { AboutComponent } from '../about/about.component';
import { DonateComponent } from '../donate/donate.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    TableComponent,
    AboutComponent,
    DonateComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
