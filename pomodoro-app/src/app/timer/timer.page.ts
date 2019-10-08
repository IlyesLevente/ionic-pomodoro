import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { TasksService, Task } from '../services/tasks.service';
import { TimerService } from '../services/timer.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  current = 0;
  max = 25;
  max2 = 60;
  stroke = 15;
  radius = 125;
  radius2 = 105;
  semicircle = false;
  rounded = false;
  responsive = false;
  clockwise = true;
  color = '#218380';
  color2 = '#D81159';
  background = '#eaeaea';
  duration = 800;
  animation = 'easeInExpo';
  animationDelay = 0;
  animations: string[] = [];
  gradient = false;
  realCurrent = 0;
  rate;
  TIME_IN_MS = 5000;
  sub;
  tasks = [];
  sortedTasks = [];
  second = 0;

  constructor(private tasksService: TasksService,
              private timerService: TimerService,
              private localNotifications: LocalNotifications) { }

  async ionViewDidEnter() {
    await this.getTasks();
    if ( this.tasks )  { this.sortedTasks = this.tasks.sort((a, b) => a.start.toString().localeCompare(b.start.toString())); }
    this.sub = Observable.interval(1000).subscribe( () => {
      this.current = this.timerService.getCurrent();
      this.second = this.timerService.getSecond();
      if ( this.current === 25 ) {
        this.localNotifications.schedule({
          title: 'Pomodoro',
          text: 'Ideje 5 prec szünetet tartani!'
        });
        this.restart();
      }
    });
  }

  async getTasks() {
    await this.tasksService.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

  start() {
    this.timerService.startTimer();
  }

  pause() {
    this.timerService.pauseTimer();
  }

  restart() {
    this.timerService.resetTimer();
    this.current = 0; this.second = 0;
  }

  changeColor(i) {
    if (this.tasks[i].color === 'white') {
      this.tasks[i].color = 'green';
      this.tasksService.updateTask(this.tasks[i]);
      return;
    }
    if (this.tasks[i].color === 'green') {
      this.tasks[i].color = '#D81159';
      this.tasksService.updateTask(this.tasks[i]);
      return;
    }
    if (this.tasks[i].color === '#D81159') {
      this.tasks[i].color = 'white';
      this.tasksService.updateTask(this.tasks[i]);
    }
  }

  ngOnInit() {

  }

  middle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': '50%',
      'bottom': 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '45%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

  getOverlayStyleMinute() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '65%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

}
