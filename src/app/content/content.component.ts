import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TableComponent } from '../table/table.component';
import { AboutComponent } from '../about/about.component';
import { DonateComponent } from '../donate/donate.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    TableComponent,
    AboutComponent,
    DonateComponent,
    PrivacyComponent,
    ImprintComponent,
    TranslateModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
