import categoryController from "./CategoryController";

const DomController = (function() {
    function initialiseEventListeners() {
        const addCategoryButton = document.querySelector("#add-project-btn");
        const addCategoryDialog = document.querySelector("#add-project-dialog");
        const addCategoryForm = document.querySelector("#add-project-form");
        const projectTitle = document.querySelector("#project-title");
        const sidebarContent = document.querySelector("#sidebar-content");

        const todoContainer = document.querySelector("#todo-container");
        const addTodoButton = document.querySelector("#add-todo-btn");
        const addTodoDialog = document.querySelector("#add-todo-dialog");
        const addTodoForm = document.querySelector("#add-todo-form");
        const todoTitle = document.querySelector("#todo-title");
        const todoDescription = document.querySelector("#todo-description");
        const todoDueDate = document.querySelector("#todo-due-date");
        const todoPriority = document.querySelector("#todo-priority");
        const todoNotes = document.querySelector("#todo-notes");
        const todoStatus = document.querySelector("#todo-status");

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
                const index = event.target.dataset.index;
                categoryController.deleteCategory(index);
                categoryController.changeCurrentCategory(index - 1);
                renderSidebar();
                renderContent();
            }

            if (event.target.classList.contains("category-btn")) {
                categoryController.changeCurrentCategory(event.target.dataset.index);
                renderContent();                
            }
        });

        addTodoButton.addEventListener("click", () => {
            addTodoDialog.showModal();
        });

        addTodoDialog.addEventListener("click", (event) => {
            if (event.target === addTodoDialog) {
                event.preventDefault();
                addTodoDialog.close();
            }
        });

        addTodoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            categoryController.addTodoToCategory(
                todoTitle.value, todoDescription.value, todoDueDate.value,
                todoPriority.value, todoNotes.value, todoStatus.value
            );
            renderContent();
        });

        todoContainer.addEventListener("click", (event) => {
            if (event.target.textContent === "Delete") {
                categoryController.deleteTodoFromCategory(event.target.dataset.index);
                renderContent();
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
            categoryButton.classList.add("category-btn");
            categoryButton.dataset.index = index;
            deleteCategoryButton.textContent = "Delete";
            deleteCategoryButton.dataset.index = index;

            sidebarContent.appendChild(categoryButton);

            if (index !== 0) {
                sidebarContent.appendChild(deleteCategoryButton);
            } 
        });
    }

    function renderContent() {
        const todos = categoryController.getCurrentCategoryTodos();
        const todoContainer = document.querySelector("#todo-container");
        todoContainer.textContent = "";

        todos.map((todo, index) => {
            const title = document.createElement("h1");
            const description = document.createElement("p");
            const dueDate = document.createElement("p");
            const priority = document.createElement("p");
            const notes = document.createElement("p");
            const status = document.createElement("p");
            const todoCard = document.createElement("div");
            const deleteTodoButton = document.createElement("button");

            title.textContent = todo.title;
            description.textContent = todo.description;
            dueDate.textContent = todo.dueDate;
            priority.textContent = todo.priority;
            notes.textContent = todo.notes;
            status.textContent = todo.status;
            deleteTodoButton.textContent = "Delete";
            deleteTodoButton.dataset.index = index;

            todoCard.appendChild(title);
            todoCard.appendChild(description);
            todoCard.appendChild(dueDate);
            todoCard.appendChild(priority);
            todoCard.appendChild(notes);
            todoCard.appendChild(status);
            todoCard.appendChild(deleteTodoButton);

            todoContainer.appendChild(todoCard);
        });
    }

    return { renderSidebar, renderContent, initialiseEventListeners };
})();

export default DomController;