const storageController = (function() {
    const KEY = "categories";

    function saveCategories(categories) {
        localStorage.setItem(KEY, JSON.stringify(categories));
    }

    function loadCategories() {
        return JSON.parse(localStorage.getItem(KEY)) || [{ title: "Home", todos: [] }];
    }

    return { saveCategories, loadCategories };
})();

export default storageController;