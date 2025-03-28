import Todo from "./Todo";

export default class Category {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority, notes, status) {
        this.todos.push(new Todo(title, description, dueDate, priority, notes, status));
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    logCategory() {
        console.log(this.title, this.todos);
    }

    static fromJSON(json) {
        return Object.assign(new Category(), json);
    }
}