import { Component } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { TodoService } from '../services/todo.service';
import { getAllTodos } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: TodoDTO[] = [];

  constructor(
    private store: Store<AppState>, 
    //private todoService: TodoService
  ) {}

  ngOnInit(): void {
    /* this.store.select('todos').subscribe(
      todos => this.todos = todos
    ); */

this.store.select('todosApp').subscribe(todosResponse => {
  this.todos = todosResponse.todos;
});

this.store.dispatch(getAllTodos());

    // this.todoService.getAllTodos().subscribe((todos) => this.todos = todos);
  }
}
