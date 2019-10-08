import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../services/tasks.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  textarea: string;
  start: Date;
  startString: string;
  endString: string;
  end: Date;
  visible = false;
  task: string;
  location: string;
  taskNumber = 0;
  id = 0;

  constructor(private tasksService: TasksService, private timerService: TimerService) {}

  ngOnInit() {
    // aktualis idoponttok beallitasa
    this.startString = new Date().toISOString();
    this.endString = new Date().toISOString();
  }
  // uj feladat
  async addTask() {
    await this.tasksService.getTasks().then(tasks => {
      if (tasks) {
        this.taskNumber = tasks.length;
      } else  {
        this.taskNumber = 0;
      }
    });
    this.id = this.taskNumber;
    this.start = new Date(this.startString);
    this.end = new Date(this.endString);
    const addTask = new Task(this.id, this.task, this.textarea, this.location, this.start, this.end, 'white', false);
    this.tasksService.addTask(addTask);
    this.startString = new Date().toISOString();
    this.endString = new Date().toISOString();
    this.textarea = '';
    this.location = '';
    this.task = '';
    const TIME_IN_MS = 2500;
    this.visible = true;
    setTimeout( () => { this.visible = false; }, TIME_IN_MS);
  }

}
