import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "http://localhost:3000/tasks/";
  tasks: Task[] = [
    {
      id: 123,
      name: "Get Food",
      date: "20-10-22",
      time: "13:00",
      completed: false
    },
    {
      id: 124,
      name: "Get Clothes",
      date: "21-10-22",
      time: "13:00",
      completed: false
    },
    {
      id: 125,
      name: "Get Groceries",
      date: "22-10-22",
      time: "13:00",
      completed: false
    }
  ];

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  addTask(taskData: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, taskData);
  }

  deleteTask(id: number): Observable<any> {
    //http://localhost:3000/tasks/{id}
    return this.http.delete<any>(`${this.baseUrl}${id}`)
  }

}
