import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { TasksService } from './tasks.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  sub;
  subSecond;
  current = 0;
  second = 0;
  minutes = 60000;
  paused = false;
  notificationMinute;
  tasks = [];

  constructor(private tasksService: TasksService,
              private localNotifications: LocalNotifications) { }

  getCurrent(): number {
    return this.current;
  }

  getSecond(): number {
    return this.second;
  }

  pauseTimer() {
    this.paused = true;
    this.sub.unsubscribe();
    this.subSecond.unsubscribe();
  }
  // az idozio
  startTimer() {
    // szunet eseten az interval a megallt alapottol kell induljon
    if (this.paused) {
      this.subSecond = Observable.interval(1000).subscribe( () => {
        this.second++;
        if ( this.second === 60 ) { this.subSecond.unsubscribe(); this.second = 0; }
      });
      this.sub = Observable.interval(60000 - (this.second * 1000)).subscribe( () => {
        this.current++;
        this.sub.unsubscribe();
        this.paused = false;
        this.startTimer();
      });
    } else {
      this.subSecond = Observable.interval(1000).subscribe( () => {
        this.second++;
        if ( this.second === 60 ) { this.second = 0; }
      });
      this.sub = Observable.interval(60000).subscribe( () => {
        this.current++;
        if ( this.current === 25 ) {
          this.sub.unsubscribe();
          this.localNotifications.schedule({
            title: 'Pomodoro',
            text: 'Ideje 5 prec szünetet tartani!'
          });
          this.resetTimer();
        }
      });
    }
  }
  // minden feladatot egyszer fel oraval a kezdes elott elkuld pushkent
  notificationTimer() {
    this.notificationMinute = Observable.interval(60000).subscribe( async () => {
      await this.getTasks();
      if (!this.tasks) { return null; }
      for (const task of this.tasks) {
        if ( !task.notification ) {
          console.log((this.diff_minutes(new Date(task.start), new Date())));
          if (this.diff_minutes(new Date(task.start), new Date()) <= 30) {
            task.notification = true;
            this.tasksService.updateTask(task);
            let notification, message;
            if ( task.task !== undefined ) {
              notification = task.task + ' fél órán belül';
              if ( task.location !== undefined ) {
                notification += ', itt: ' + task.location;
              }
            }
            if ( task.textarea !== undefined ) {
              message = task.textarea;
            }
            this.localNotifications.schedule({
              title: notification,
              text: message
            });
          }
        }
      }
    });
  }

  diff_minutes(dt2, dt1) {
    const dt2_h = dt2.getHours();
    const dt1_h = dt1.getHours();
    const dt2_m = dt2.getMinutes();
    const dt1_m = dt1.getMinutes();
    let final;

    if ( dt2_h - dt1_h > 0 ) {
      const h = dt2_h - dt1_h;
      final = h * 60 + dt2_m - dt1_m;
    }
    if ( dt2_h - dt1_h === 0 ) {
      if (dt2_m - dt1_m > 0) {
        final = dt2_m - dt1_m;
      }
    }

    return final;
  }

  async getTasks() {
    await this.tasksService.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

  resetTimer() {
    this.sub.unsubscribe();
    this.subSecond.unsubscribe();
    this.second = 0;
    this.current = 0;
  }

}
