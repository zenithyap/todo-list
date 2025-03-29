import categoryController from "./CategoryController";

const DomController = (function() {
    const categories = categoryController.getCategories();
    const addCategoryButton = document.querySelector("#add-project-btn");

    addCategoryButton.addEventListener("click", () => {
        categoryController.addCategory("")
    });

    function renderSidebar() {
        const sidebar = document.querySelector("#sidebar");

        categories.map(category => {
            const categoryButton = document.createElement("button");
            categoryButton.textContent = category.title;
            sidebar.appendChild(categoryButton);
        });
    }

    function renderContent() {

    }

    return { renderSidebar };
})();

export default DomController;