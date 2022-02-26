import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes; 
  constructor() { }

  ngOnInit(): void {}

  onDelete(taskFromDelete: any){
    this.onDeleteTask.emit(taskFromDelete)
  }

  onToggle(taskFromReminder: any){
    this.onToggleReminder.emit(taskFromReminder)
  }

  }


