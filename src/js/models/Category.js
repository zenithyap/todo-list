import Todo from "./Todo";

export default class Category {
    constructor(title) {
        this._title = title;
        this._todos = [];
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get todos() {
        return this._todos.map(todo => Todo.fromJSON(todo));
    }

    set todos(newTodos) {
        this._todos = newTodos;
    }

    addTodo(title, description, dueDate, priority, notes, status) {
        this._todos.push(new Todo(title, description, dueDate, priority, notes, status));
    }

    deleteTodo(index) {
        this._todos.splice(index, 1);
    }

    editTodo(index, title, description, dueDate, priority, notes, status) {
        const todo = Todo.fromJSON(this._todos[index]);
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.notes = notes;
        todo.status = status;

        this._todos[index] = todo;
    }

    logCategory() {
        console.log(this._title, this._todos);
    }

    static fromJSON(json) {
        return Object.assign(new Category(), json);
    }
}