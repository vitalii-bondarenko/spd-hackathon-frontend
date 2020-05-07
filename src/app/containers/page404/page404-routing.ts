import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page404.component';

@NgModule({
  imports: [ RouterModule.forChild([ {path: '', component: Page404Component} ]) ],
  exports: [ RouterModule ]
})

export class Page404Routing {}
