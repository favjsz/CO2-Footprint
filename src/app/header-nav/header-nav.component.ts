import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent{

  constructor(public translateService:TranslateService){
    translateService.addLangs(['de','en','ar'])
    translateService.setDefaultLang('de')
  }

  // Sende die aktuelle Sprache an app.component
  @Output() selectedLanguage = new EventEmitter<string>();

  // Sprachwahl und Layout für arabische Sprache
  switchLanguage(language: string) {
    this.translateService.use(language);
    // Speichere die Auswahl im LocalStorage
    localStorage.setItem('selectedLanguage', language); 
    this.languageSelect(language);
  
    // Design von rechts nach Links, wenn arabisch ausgewählt wird.
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

  //Sende diesen Wert an die Parent-Komponente
  languageSelect(language: string){
    this.selectedLanguage.emit(language);
  }

  ngOnInit() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.switchLanguage(storedLanguage); // Lade die gespeicherte Sprache beim Initialisieren der Komponente
    }
  }
}
