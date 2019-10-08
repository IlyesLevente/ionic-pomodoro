import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { IonicModule } from '@ionic/angular';

import { TimerPage } from './timer.page';

const routes: Routes = [
  {
    path: '',
    component: TimerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoundProgressModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimerPage]
})
export class TimerPageModule {}
