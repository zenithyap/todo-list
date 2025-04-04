import Category from "../models/Category";
import Todo from "../models/Todo";

const storageController = (function() {
    const KEY = "categories";

    function saveCategories(categories) {
        localStorage.setItem(KEY, JSON.stringify(categories));
    }

    function loadCategories() {
        const data = JSON.parse(localStorage.getItem(KEY)) || [{ title: "Home", todos: [] }];
        return data.map(c => {
            const category = Category.fromJSON(c);
            const todos = category.todos.map(todo => Todo.fromJSON(todo));
            return new Category(category.title, todos);
        });
    }

    return { saveCategories, loadCategories };
})();

export default storageController;