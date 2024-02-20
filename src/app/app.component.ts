import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './table/table.component';
import { TableData, dataset } from './data-source';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    RouterOutlet,
    HeaderNavComponent,
    ContentComponent,
    CommonModule,
    TableComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CO²-Fußabdruck';
}
