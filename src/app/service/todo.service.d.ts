export class TodoService {
  constructor();

  getTodos(): any[];
  addTodo(title: string): any;
  delete(id: number): void;
  toggle(todo: any): void;
  update(updatedTodo: any): void;
  stats(): {
    total: number;
    completed: number;
    active: number;
    completionRate: number;
  };
}
