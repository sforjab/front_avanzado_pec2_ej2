import { Component } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { TodoService } from '../services/todo.service';
import { completeAllTodos, deleteAllCompletedTodos, getAllTodos } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: TodoDTO[] = [];

  constructor(
    private store: Store<AppState>, 
  ) {}

  ngOnInit(): void {
    this.store.select('todosApp').subscribe(todosResponse => {
      this.todos = todosResponse.todos;
    });

    this.store.dispatch(getAllTodos());
  }

  // Método para completar todos los todos
  completeAllTodos(): void {
    // Comprobamos si hay algún todo sin completar para evitar llamadas innecesarias al 'store'
    const incompleteTodos = this.todos.some(todo => !todo.done);

    // Si hay alguno sin completar, llamamos a 'completeAllTodos()'
    if(incompleteTodos) {
      this.store.dispatch(completeAllTodos());
    // En caso contrario, mostramos mensaje por consola
    } else {
      console.log('No existen tareas sin completar');
    }
  }

  // Método para eliminar todos los todos completados
  deleteAllCompletedTodos(): void {
    // Comprobamos si hay algún todo completo para evitar llamadas innecesarias al 'store'
    const completeTodos = this.todos.some(todo => todo.done);

    // Si hay alguno completo, llamamos a 'deleteAllCompletedTodos()'
    if(completeTodos) {
      this.store.dispatch(deleteAllCompletedTodos());
    // En caso contrario, mostramos mensaje por consola
    } else {
      console.log('No existen tareas completas');
    }
    
  }
}
