import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'tasks';

export class Task {
  id: number;
  textarea: string;
  start: Date;
  end: Date;
  task: string;
  location: string;
  color: string;
  notification: boolean;

  constructor(id, task, textarea, location, start, end, color, notification) {
    // tslint:disable-next-line: max-line-length
    this.id = id; this.task = task; this.textarea = textarea; this.location = location; this.start = start; this.end = end; this.color = color; this.notification = notification;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public storage: Storage) { }

  getTasks(): Promise<Task[]> {
    return this.storage.get(STORAGE_KEY);
  }

  addTask(task: Task): Promise<any> {
    return this.storage.get(STORAGE_KEY).then((tasks: Task[]) => {
      let keepTasks: Task[] = [];

      if ( !tasks || tasks.length === 0 ) {
        keepTasks[0] = task;
        return this.storage.set(STORAGE_KEY, keepTasks);
      }
      keepTasks = tasks;
      keepTasks.push(task);
      return this.storage.set(STORAGE_KEY, keepTasks);
    });
  }

  deleteTasks() {
    this.storage.clear();
  }

  updateTask(task: Task): Promise<any> {
    return this.storage.get(STORAGE_KEY).then((tasks: Task[]) => {
      if ( !tasks || tasks.length === 0 ) {
        return null;
      }

      const newTasks: Task[] = [];

      for ( const data of tasks ) {
        if (data.id === task.id) {
          newTasks.push(task);
        } else {
          newTasks.push(data);
        }
      }

      return this.storage.set(STORAGE_KEY, newTasks);
    });
  }

  deleteTask(id: number): Promise<Task> {
    return this.storage.get(STORAGE_KEY).then((tasks: Task[]) => {
      if ( !tasks || tasks.length === 0 ) {
        return null;
      }

      const keepTasks: Task[] = [];

      for ( const task of tasks ) {
        if (task.id !== id) {
          keepTasks.push(task);
        }
      }

      return this.storage.set(STORAGE_KEY, keepTasks);
    });
  }

}
