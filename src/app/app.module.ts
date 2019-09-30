import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RouteProxyComponent } from './component/route-proxy/route-proxy.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './scene/home/home.component';

import { ServicesModule } from './service/service.module';

const routePaths: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'house/:id',
    outlet: 'modal',
    component: RouteProxyComponent,
    children: [
      {
        path: '',
        loadChildren: './scene/house/house.module#HouseModule',
      },
    ],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routePaths),
    ServicesModule.forRoot(),
    InfiniteScrollModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    RouteProxyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
