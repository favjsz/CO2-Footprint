import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { DonateComponent } from "./donate/donate.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { PrivacyComponent } from "./privacy/privacy.component";

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
        AppComponent,
        HttpClientModule,
        TableComponent,
        AboutComponent,
        HomeComponent,
        DonateComponent,
        ImprintComponent,
        PrivacyComponent,
        TranslateModule.forRoot({
            loader:{
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps:[HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap:[]
})

export class AppModule{}
export function httpTranslateLoader(http:HttpClient){
    return new TranslateHttpLoader(http)
}