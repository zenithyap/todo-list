import Todo from "../models/Todo";
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

    function addTodoToCategory(title, description, dueDate, priority, notes, status) {
        currentCategory.todos.push(new Todo(title, description, dueDate, priority, notes, status));
        storageController.saveCategories(categories);
    }

    function changeCurrentCategory(index) {
        currentCategory = categories[index];
    }

    function logCategories() {
        for (const category of categories) {
            category.logCategory();
        }
    }

    return { getCategories, addCategory, addTodoToCategory, changeCurrentCategory, logCategories };
})();

export default categoryController;