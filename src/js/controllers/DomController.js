import categoryController from "./CategoryController";

const DomController = (function() {
    function initialiseEventListeners() {
        const addCategoryButton = document.querySelector("#add-project-btn");
        const addCategoryDialog = document.querySelector("#add-project-dialog");
        const addCategoryForm = document.querySelector("#add-project-form");
        const projectTitle = document.querySelector("#project-title");
        const sidebarContent = document.querySelector("#sidebar-content");

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

        sidebarContent.addEventListener("click", (event) => {
            if (event.target.textContent === "Delete") {
                categoryController.deleteCategory(event.target.dataset.index);
                renderSidebar();
            }
        });
    }

    function renderSidebar() {
        const categories = categoryController.getCategories();
        const sidebarContent = document.querySelector("#sidebar-content");
        sidebarContent.textContent = "";

        categories.map((category, index) => {
            const categoryButton = document.createElement("button");
            const deleteCategoryButton = document.createElement("button");
            categoryButton.textContent = category.title;
            deleteCategoryButton.textContent = "Delete";
            deleteCategoryButton.dataset.index = index;
            sidebarContent.appendChild(categoryButton);
            if (index !== 0) {
                sidebarContent.appendChild(deleteCategoryButton);
            } 
        });
    }

    function renderContent() {

    }

    return { renderSidebar, initialiseEventListeners };
})();

export default DomController;