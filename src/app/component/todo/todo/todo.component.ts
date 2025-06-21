import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
// import { NotificationService } from 'src/app/service/notification.service';
// import { StorageService } from 'src/app/service/storage.service';
// @ts-ignore
import { TodoService } from 'src/app/service/todo.service.js';
// @ts-ignore
import {StorageService} from 'src/app/service/storage.service';
// @ts-ignore
// import { NotificationService } from 'src/app/service/notification.service.js';
import { UpgradeModule } from '@angular/upgrade/static';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoService: any = new TodoService();
  notif: any;
  storage: any = new StorageService();
  newTodo = '';
  todos: Todo[] = [];
  currentFilter = 'all';

  constructor(private upgrade: UpgradeModule) {}

  ngOnInit(): void {

    const $injector = this.upgrade.injector;
    this.notif = $injector.get('NotificationService');
    
    this.todos = this.todoService.getTodos();


    this.todoService.addTodo('Learn Angular 14');
    this.todoService.addTodo('Convert AngularJS App');
    this.todoService.addTodo('Explore Angular CLI');
    this.todos[0].completed = true;

    const savedFilter = this.storage.get('todoFilter');
    if (savedFilter) {
      this.currentFilter = savedFilter;
    }
    this.notif('Welcome to the Todo App!', 'success');
  }

  addTodo() {
    if (this.newTodo.trim() === '') {
      this.notif.showNotification('Please enter a todo title.', 'error');
      return;
    }
    const todo = this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.notif.showNotification('Todo added successfully!', 'success');
  }

  deleteTodo(id: number) {
    this.todoService.delete(id);
    this.todos = this.todoService.getTodos();
    this.notif.showNotification('Todo deleted successfully!', 'success');
  }

  toggleTodo(todo: Todo) {
    // this.todoService.toggle(todo);
    this.notif.showNotification(`Todo "${todo.title}" marked as ${todo.completed ? 'completed' : 'active'}.`, 'success');
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
    this.storage.set('todoFilter', filter);
  }

   getFilteredTodos(): Todo[] {
    switch (this.currentFilter) {
      case 'active': return this.todos.filter(t => !t.completed);
      case 'completed': return this.todos.filter(t => t.completed);
      default: return this.todos;
    }
  }
  trackById(index: number, todo: Todo): number {
  return todo.id;
}


  getTotalCount() { return this.todoService.stats().total; }
  getActiveCount() { return this.todoService.stats().active; }
  getCompletedCount() { return this.todoService.stats().completed; }
  getCompletionRate() { return this.todoService.stats().completionRate; }


}
