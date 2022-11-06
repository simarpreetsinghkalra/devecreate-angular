import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.taskForm.invalid) {
      alert("The form is invalid");
      return;
    }
    const task = this.taskForm.value as Task;
    this.taskService.addTask(task).subscribe(res => {
      if (!res.id) {
        alert("Save Unsuccessful");
        return;
      }
      alert("task saved");
      this.router.navigateByUrl("/");
    });
  }

}
