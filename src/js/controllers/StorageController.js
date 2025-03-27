import categoryController from "./CategoryController";
import Category from "../models/Category";

const storageController = (function() {
    const KEY = "categories";

    function saveCategories() {
        localStorage.setItem(KEY, JSON.stringify(categoryController.getCategories()))
    }

    function loadCategories() {
        const categories = JSON.parse(localStorage.getItem(KEY));
        if (categories) {
            return categories.map(category => Category.fromJSON(category));
        }
        return [new Category("Home")];
    }

    return { saveCategories, loadCategories };
})();

export default storageController;