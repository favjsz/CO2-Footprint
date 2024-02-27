import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    RouterModule,
    HeaderNavComponent,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})

export class AppComponent {

getSelectedLanguage(newLanguage: string){
  // Aktuelle Sprache aus der Child-Komponente übergeben
  let language = newLanguage;

  // Bildschirmlayout bei Sprachwahlauswahl arabisch und bei Bildschirmweite >= lg
  if(language === 'ar' && window.innerWidth >= 992){
    let langLayout = document.getElementById('LangLayout');
    if(langLayout != null){
    langLayout.style.flexDirection = 'row-reverse';
    } else {
      console.error('Element with ID "LangLayout" not found.');
    }
  } else{
      let langLayout = document.getElementById('LangLayout');
      if (langLayout != null) {
        langLayout.style.flexDirection = 'row';
      } else {
        console.error('Element with ID "LangLayout" not found.');
      }
    }
}
}
