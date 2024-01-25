import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from './task.model';
import {Observable, Subscription} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined;
  tasks: Task[] = [];
  addTaskTitle: string = '';
  addTaskDescription: string = '';

  constructor(private db: AngularFireDatabase) {
    // console.log(db.collection('tasks'))
    db.list('tasks').valueChanges()
  }

  ngOnInit(): void {
    this.subscription = this.db.list('tasks').valueChanges().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }

  addtask() {
    if (this.addTaskTitle.trim()) {
      const timestamp = Date.now();
      const task = {
        title: this.addTaskTitle,
        description: this.addTaskDescription, // Replace with actual user information
        sender: 'Local',
        id: timestamp,
      };

      this.db.list('tasks').push(task);

      this.addTaskTitle = ''
      this.addTaskDescription = ''
    }

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); // Prevent memory leaks
  }
}
