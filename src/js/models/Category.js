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

    getIndexFromId(id) {
        return this._todos.findIndex(todo => todo.id === id);
    }

    deleteTodo(id) {
        const index = this.getIndexFromId(id);
        this._todos.splice(index, 1);
    }

    editTodo(id, todo) {
        const index = this.getIndexFromId(id);
        this._todos[index] = todo;
    }

    getTodo(id) {
        const index = this.getIndexFromId(id);
        return this._todos[index];
    }

    logCategory() {
        console.log(this._title, this._todos);
    }

    static fromJSON(json) {
        return Object.assign(new Category(), json);
    }
}