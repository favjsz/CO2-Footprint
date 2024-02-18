import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent{

  constructor(public translate:TranslateService){
    translate.addLangs(['de','en','ar'])
    translate.setDefaultLang('de')
  }
    // Sprachwahl und Layout für arabische Sprache
  switchLanguage(language: string) {
    this.translate.use(language);
  
    if (language === 'ar') {

      let layoutSelect = document.getElementById('layoutSelect');

      if (layoutSelect != null) {
        layoutSelect.style.flexDirection = 'row-reverse';
      } else {
        console.error('Element with ID "layoutSelect" not found.');
      }
    } else{
      let layoutSelect = document.getElementById('layoutSelect');
      if (layoutSelect != null) {
        layoutSelect.style.flexDirection = 'row';
      } else {
        console.error('Element with ID "layoutSelect" not found.');
      }
    }
  }
}
