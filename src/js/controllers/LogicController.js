import categoryController from "./CategoryController";

const logicController = (function() {
    // categoryController.addTodoToCategory("title", "description", "dueDate", "priority", "notes", "status");
    // categoryController.addCategory("New Category");
    categoryController.logCategories();
})();

export default logicController;