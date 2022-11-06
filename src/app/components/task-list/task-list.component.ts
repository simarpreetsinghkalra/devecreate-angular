import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log("Hello World");
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  deleteTask(id: any): void {
    this.taskService.deleteTask(id).subscribe(res => {
      alert("Task Deleted");
      const toDeleteIndex = this.tasks.findIndex(task => task.id === id);
      this.tasks.splice(toDeleteIndex, 1);
    });
  }
}
