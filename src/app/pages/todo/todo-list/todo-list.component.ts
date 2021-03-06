import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  @Input('todo') todo;

  @Output() todoChange = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  statusChange(e) {
    this.todoChange.emit(this.todo);
  }

  deleteTodo(e) {
    this.deleteItem.emit(this.todo);
  }

}
