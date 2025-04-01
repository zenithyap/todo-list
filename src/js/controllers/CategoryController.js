import Category from "../models/Category";
import storageController from "./StorageController";

const categoryController = (function() {
    const categoriesObjects = storageController.loadCategories();
    const categories = categoriesObjects.map(category => Category.fromJSON(category));
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
        currentCategory.addTodo(title, description, dueDate, priority, notes, status);
        storageController.saveCategories(categories);
    }

    function deleteTodoFromCategory(index) {
        currentCategory.deleteTodo(index);
        storageController.saveCategories(categories);
    }

    function editTodoInCategory(index, updatedFields) {
        currentCategory.editTodo(index, updatedFields);
        storageController.saveCategories(categories);
    }

    function changeCurrentCategory(index) {
        currentCategory = categories[index];
    }

    function getCurrentCategoryTodos() {
        return currentCategory.todos
    }

    function logCategories() {
        for (const category of categories) {
            category.logCategory();
        }
    }

    return { 
        getCategories, addCategory, deleteCategory, 
        addTodoToCategory, deleteTodoFromCategory, editTodoInCategory,
        changeCurrentCategory, getCurrentCategoryTodos, logCategories 
    };
})();

export default categoryController;