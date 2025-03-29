import Todo from "./Todo";

export default class Category {
    constructor(title) {
        this._title = title;
        this.todos = [];
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    addTodo(title, description, dueDate, priority, notes, status) {
        this.todos.push(new Todo(title, description, dueDate, priority, notes, status));
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    editTodo(index, updatedFields) {
        const todo = Todo.fromJSON(this.todos[index]);
        todo.edit(updatedFields);
        this.todos[index] = todo;
    }

    logCategory() {
        console.log(this._title, this.todos);
    }

    static fromJSON(json) {
        return Object.assign(new Category(), json);
    }
}