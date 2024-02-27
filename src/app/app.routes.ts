import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';
import { DonateComponent } from './donate/donate.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'CO² Footprint'
    },
    { path: 'home', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'about', component: AboutComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'imprint', component: ImprintComponent },
];

export default routes;