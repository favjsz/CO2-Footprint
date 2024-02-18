import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    RouterOutlet,
    HeaderNavComponent,
    ContentComponent,
    CommonModule
  ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CO²-Fußabdruck';
}
