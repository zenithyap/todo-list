import Category from "../models/Category";
import Todo from "../models/Todo";
import storageController from "./StorageController";
import { compareAsc, isToday, endOfWeek, endOfMonth } from "date-fns";

const categoryController = (function() {
    const categories = storageController.loadCategories();
    let currentCategoryIndex = 0;
    let currentCategory = categories[currentCategoryIndex];

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

    function addTodoToCategory(title, dueDate, priority, notes) {
        const newTodo = new Todo(title, dueDate, priority, notes, currentCategoryIndex);
        currentCategory.addTodo(newTodo);
        storageController.saveCategories(categories);
    }

    function deleteTodoFromCategory(id, categoryIndex) {
        categories[categoryIndex].deleteTodo(id);
        storageController.saveCategories(categories);
    }

    function editTodoInCategory(id, categoryIndex, title, dueDate, priority, notes) {
        const editedTodo = new Todo(title, dueDate, priority, notes, categoryIndex);
        categories[categoryIndex].editTodo(id, editedTodo);
        storageController.saveCategories(categories);
    }

    function changeCurrentCategory(index) {
        currentCategoryIndex = index;
        currentCategory = categories[currentCategoryIndex];
    }

    function getCurrentCategoryIndex() {
        return currentCategoryIndex;
    }

    function getCurrentCategory() {
        return categories[currentCategoryIndex].title;
    }

    function getCurrentCategoryTodos() {
        return currentCategory.todos;
    }

    function getTodoFromCategory(id, categoryIndex) {
        return categories[categoryIndex].getTodo(id);
    }

    function getAllTodos() {
        return categories.flatMap(category => {
            return category.todos;
        });
    }

    function getTodayTodos() {
        const allTodos = getAllTodos();
        
        return allTodos.filter(todo => isToday(todo.dueDate));
    }

    function getWeekTodos() {
        const today = new Date();
        const allTodos = getAllTodos();

        return allTodos.filter(todo => compareAsc(todo.dueDate, endOfWeek(today, {weekStartsOn: 1})) === -1);
    }

    function getMonthTodos() {
        const today = new Date();
        const allTodos = getAllTodos();

        return allTodos.filter(todo => compareAsc(todo.dueDate, endOfMonth(today)) === -1);
    }

    function logCategories() {
        for (const category of categories) {
            category.logCategory();
        }
    }

    return { 
        getCategories, addCategory, deleteCategory, 
        addTodoToCategory, deleteTodoFromCategory, editTodoInCategory,
        changeCurrentCategory, getCurrentCategoryIndex, getCurrentCategory, 
        getCurrentCategoryTodos, getTodoFromCategory, getTodayTodos, 
        getWeekTodos, getMonthTodos, logCategories 
    };
})();

export default categoryController;