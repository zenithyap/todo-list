class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }
}
class Category {
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
}

const categoryController = (function() {
    const categories = storageController.loadCategories();
    let currentCategory = categories[0];

    function addCategory(title) {
        categories.push(new Category(title));
        storageController.saveCategories();
    }

    function addTodoToCategory(title, description, dueDate, priority, notes, status) {
        currentCategory.todos.push(new Todo(title, description, dueDate, priority, notes, status));
        storageController.saveCategories();
    }

    function changeCurrentCategory(index) {
        currentCategory = categories[index];
    }

    function logCategories() {
        for (const category of categories) {
            console.log(category.logCategory());
        }
    }

    return { addCategory, addTodoToCategory, changeCurrentCategory, logCategories };
})();

/*
StorageController Module
*/
const storageController = (function() {
    const KEY = "categories";

    function saveCategories() {
        localStorage.setItem(key, JSON.stringify())
    }

    function loadCategories() {

    }

    return { saveCategories, loadCategories };
})();

/*
LogicController Module
- create new Category
- delete Category (confirmation to delete all Todo inside)
- create new Todo (set title, desc ... ) (to cur category selected)
- change Todo status (status, priority)
- delete Todo
*/
const logicController = (function() {
    categoryController.addCategory("test");
    categoryController.addTodoToCategory("hello", "desc", "2024", "high", "notes", "status");
    categoryController.changeCurrentCategory(1);
    categoryController.addTodoToCategory("hello", "desc", "2024", "high", "notes", "status");
    categoryController.logCategories();
})();

/*
DomController Module
*/