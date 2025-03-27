export default class Category {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
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