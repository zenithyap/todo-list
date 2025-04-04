export default class Category {
    constructor(title, todos=[]) {
        this._title = title;
        this._todos = todos;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get todos() {
        return this._todos;
    }

    set todos(newTodos) {
        this._todos = newTodos;
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    deleteTodo(index) {
        this._todos.splice(index, 1);
    }

    editTodo(index, todo) {
        this._todos[index] = todo;
    }

    logCategory() {
        console.log(this._title, this._todos);
    }

    static fromJSON(json) {
        return Object.assign(new Category(), json);
    }
}