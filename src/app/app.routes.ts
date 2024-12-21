import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';
import { RxjsObvlsComponent } from './rxjs-obvls/rxjs-obvls.component';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: 'rxjs-obvls-component', component: RxjsObvlsComponent },
    { path: 'ang-material-component', component: AngMaterialComponent },
    { path: 'articles-component', component: ArticlesComponent },
];
