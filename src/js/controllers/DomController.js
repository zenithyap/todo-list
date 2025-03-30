import categoryController from "./CategoryController";

const DomController = (function() {
    function initialiseEventListeners() {
        const addCategoryButton = document.querySelector("#add-project-btn");
        const addCategoryDialog = document.querySelector("#add-project-dialog");
        const addCategoryForm = document.querySelector("#add-project-form");
        const projectTitle = document.querySelector("#project-title");

        addCategoryButton.addEventListener("click", () => {
            addCategoryDialog.showModal();
        });

        addCategoryDialog.addEventListener("click", (event) => {
            if (event.target === addCategoryDialog) {
                event.preventDefault();
                addCategoryDialog.close();
            }
        });

        addCategoryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            categoryController.addCategory(projectTitle.value);
            renderSidebar();
        });
    }

    function renderSidebar() {
        const categories = categoryController.getCategories();
        const sidebarContent = document.querySelector("#sidebar-content");
        sidebarContent.textContent = "";

        categories.map(category => {
            const categoryButton = document.createElement("button");
            categoryButton.textContent = category.title;
            sidebarContent.appendChild(categoryButton);
        });
    }

    function renderContent() {

    }

    return { renderSidebar, initialiseEventListeners };
})();

export default DomController;