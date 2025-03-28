import categoryController from "./CategoryController";

const logicController = (function() {
    // categoryController.addTodoToCategory("title", "description", "dueDate", "priority", "notes", "status");
    // categoryController.addCategory("New Category");
    // categoryController.deleteCategory(2);
    // categoryController.deleteTodoFromCategory(1);
    categoryController.editTodoInCategory(0, {title: "editedTitle", priority: "editedPriority"})
    categoryController.logCategories();
})();

export default logicController;