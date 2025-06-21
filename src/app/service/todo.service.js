export class TodoService {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title) {
    const newTodo = {
      id: this.nextId++,
      title: title,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  delete(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggle(todo) {
    todo.completed = !todo.completed;
  }

  update(updatedTodo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = { ...updatedTodo };
    }
  }

  stats() {
    const total = this.todos.length;
    const completed = this.todos.filter(todo => todo.completed).length;

    return {
      total,
      completed,
      active: total - completed,
      completionRate: total ? Math.round((completed / total) * 100) : 0
    };
  }
}
