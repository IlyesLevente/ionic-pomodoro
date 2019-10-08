import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  tasks = [];
  sortedTasks = [];
  sortType = 'start';
  constructor(private tasksService: TasksService) {
  }

  ionViewDidEnter() {
    this.getTasks();
    if ( this.tasks )  {this.sortedTasks = this.tasks.sort((a, b) => a.start.toString().localeCompare(b.start.toString())); }
  }

  async ngOnInit() {
    await this.getTasks();
    if ( this.tasks )  { this.sortedTasks = this.tasks.sort((a, b) => a.start.toString().localeCompare(b.start.toString())); }
  }

  async deleteItem(task) {
    await this.tasksService.deleteTask(task.id);
    await this.getTasks();
    if ( this.tasks )  { this.sortedTasks = this.tasks.sort((a, b) => a.start.toString().localeCompare(b.start.toString())); }
  }

  async getTasks() {
    await this.tasksService.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

  async deleteTasks() {
    await this.tasksService.deleteTasks();
    await this.getTasks();
    this.sortedTasks = this.tasks;
  }

}
