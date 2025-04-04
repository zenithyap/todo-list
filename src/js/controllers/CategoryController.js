import Category from "../models/Category";
import Todo from "../models/Todo";
import storageController from "./StorageController";

const categoryController = (function() {
    const categories = storageController.loadCategories();
    let currentCategory = categories[0];

    function getCategories() {
        return categories;
    }

    function addCategory(title) {
        categories.push(new Category(title));
        storageController.saveCategories(categories);
    }

    function deleteCategory(index) {
        categories.splice(index, 1);
        storageController.saveCategories(categories);
    }

    function addTodoToCategory(title, description, dueDate, priority, notes, status) {
        const newTodo = new Todo(title, description, dueDate, priority, notes, status);
        currentCategory.addTodo(newTodo);
        storageController.saveCategories(categories);
    }

    function deleteTodoFromCategory(index) {
        currentCategory.deleteTodo(index);
        storageController.saveCategories(categories);
    }

    function editTodoInCategory(index, title, description, dueDate, priority, notes, status) {
        const editedTodo = new Todo(title, description, dueDate, priority, notes, status);
        currentCategory.editTodo(index, editedTodo);
        storageController.saveCategories(categories);
    }

    function changeCurrentCategory(index) {
        currentCategory = categories[index];
    }

    function getCurrentCategoryTodos() {
        return currentCategory.todos;
    }

    function getTodoFromCategory(index) {
        return currentCategory.todos[index];
    }

    function logCategories() {
        for (const category of categories) {
            category.logCategory();
        }
    }

    return { 
        getCategories, addCategory, deleteCategory, 
        addTodoToCategory, deleteTodoFromCategory, editTodoInCategory,
        changeCurrentCategory, getCurrentCategoryTodos, getTodoFromCategory, 
        logCategories 
    };
})();

export default categoryController;