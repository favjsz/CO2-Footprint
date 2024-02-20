import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
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