import { createAction, props } from "@ngrx/store";
import { TodoDTO } from "../models/todo.dto";

export const createTodo = createAction(
    '[TODO] Create todo',
    props<{ title: string }>()
);

export const completeTodo = createAction(
    '[TODO] Complete todo',
    props<{ id: number }>()
);

export const editTodo = createAction(
    '[TODO] Edit todo',
    props<{ id: number, title: string }>()
);

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
);

export const getAllTodos = createAction('[TODOS] Get all');

export const getAllTodosSuccess = createAction(
    '[TODOS] Get all success',
    props<{ todos: TodoDTO[] }>()
);

export const getAllTodosError = createAction(
    '[TODOS] Get all error',
    props<{ payload: any }>()
);

// ACción para completar todas las tareas
export const completeAllTodos = createAction(
    '[TODOS] Complete all todos'
);

// Acción para eliminar todas las tareas completadas
export const deleteAllCompletedTodos = createAction(
    '[TODOS] Delete all completed todos'
);

