import categoryController from "./CategoryController";

const DomController = (function() {
    function initialiseEventListeners() {
        initialiseSidebarEventListeners();        
        initialiseContentEventListerners();
    }

    function initialiseSidebarEventListeners() {
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
            const deleteButton = event.target.closest(".delete-category-btn");
            const categoryButton = event.target.closest(".category-btn");
            
            if (deleteButton) {
                const index = deleteButton.dataset.index;
                categoryController.deleteCategory(index);
                categoryController.changeCurrentCategory(index - 1);

                renderSidebar();
                renderContent();
            }

            if (categoryButton) {
                categoryController.changeCurrentCategory(categoryButton.dataset.index);
                renderContent();
                renderSidebar();      
            }
        });
    }

    function initialiseContentEventListerners() {
        const todoContainer = document.querySelector("#todo-container");
        const addTodoButton = document.querySelector("#add-todo-btn");
        const addTodoDialog = document.querySelector("#add-todo-dialog");
        const addTodoForm = document.querySelector("#add-todo-form");

        const editTodoDialog = document.querySelector("#edit-todo-dialog");
        const editTodoForm = document.querySelector("#edit-todo-form");
        const editTodoTitle = document.querySelector("#edit-todo-title");
        const editTodoDescription = document.querySelector("#edit-todo-description");
        const editTodoDueDate = document.querySelector("#edit-todo-due-date");
        const editTodoPriority = document.querySelector("#edit-todo-priority");
        const editTodoNotes = document.querySelector("#edit-todo-notes");

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

            const todoTitle = document.querySelector("#todo-title");
            const todoDescription = document.querySelector("#todo-description");
            const todoDueDate = document.querySelector("#todo-due-date");
            const todoPriority = document.querySelector("#todo-priority");
            const todoNotes = document.querySelector("#todo-notes");

            categoryController.addTodoToCategory(
                todoTitle.value, todoDescription.value, todoDueDate.value,
                todoPriority.value, todoNotes.value
            );
            addTodoForm.reset();
            renderContent();
        });

        todoContainer.addEventListener("click", (event) => {
            const editTodoButton = event.target.closest(".edit-todo-btn");
            if (event.target.textContent === "Delete") {
                categoryController.deleteTodoFromCategory(event.target.dataset.index);
                renderContent();
            }

            if (editTodoButton) {
                const todo = categoryController.getTodoFromCategory(editTodoButton.dataset.index);
                editTodoForm.dataset.index = editTodoButton.dataset.index;

                editTodoTitle.value = todo.title;
                editTodoDescription.value = todo.description;
                editTodoDueDate.value = todo.dueDate;
                editTodoPriority.value = todo.priority;
                editTodoNotes.value = todo.notes;

                editTodoDialog.showModal();
            }
        });

        editTodoDialog.addEventListener("click", (event) => {
            if (event.target === editTodoDialog) {
                event.preventDefault();
                editTodoDialog.close();
            }
        });

        editTodoForm.addEventListener("submit", (event) => {
            event.preventDefault();

            categoryController.editTodoInCategory(
                editTodoForm.dataset.index,
                editTodoTitle.value, editTodoDescription.value, editTodoDueDate.value,
                editTodoPriority.value, editTodoNotes.value
            );

            renderContent();
        });
    }

    function renderSidebar() {
        const categories = categoryController.getCategories();
        const currentCategoryIndex = parseInt(categoryController.getCurrentCategoryIndex());
        const sidebarContent = document.querySelector("#sidebar-content");
        sidebarContent.textContent = "";


        categories.map((category, index) => {
            const categoryButton = document.createElement("button");
            const deleteCategoryButton = document.createElement("button");
            const categoryRow = document.createElement("div");

            categoryButton.textContent = category.title;
            categoryButton.classList.add("category-btn");
            categoryButton.dataset.index = index;
            if (index === currentCategoryIndex) {
                categoryButton.classList.add("active");
            }
            deleteCategoryButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteCategoryButton.classList.add("delete-category-btn");
            deleteCategoryButton.dataset.index = index;

            categoryRow.classList.add("category-row");
            categoryRow.appendChild(categoryButton);
            if (index !== 0) {
                categoryRow.appendChild(deleteCategoryButton);
            }

            sidebarContent.appendChild(categoryRow);
        });
    }

    function renderContent() {
        const todos = categoryController.getCurrentCategoryTodos();
        const todoContainer = document.querySelector("#todo-container");
        todoContainer.textContent = "";

        todos.map((todo, index) => {
            const title = document.createElement("h3");
            const description = document.createElement("p");
            const dueDate = document.createElement("p");
            const notes = document.createElement("p");
            const todoCard = document.createElement("div");
            const deleteTodoButton = document.createElement("button");
            const editTodoButton = document.createElement("button");

            title.textContent = todo.title;

            const priority = todo.priority;
            if (priority === "High") {
                title.classList.add("high-priority");
            } else if (priority === "Medium") {
                title.classList.add("medium-priority");
            } else {
                title.classList.add("low-priority");
            }

            description.textContent = todo.description;
            dueDate.textContent = todo.dueDate;
            notes.textContent = todo.notes;
            deleteTodoButton.textContent = "Delete";
            deleteTodoButton.dataset.index = index;
            editTodoButton.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
            editTodoButton.dataset.index = index;
            editTodoButton.classList.add("edit-todo-btn");
            todoCard.classList.add("todo-card");

            todoCard.appendChild(title);
            todoCard.appendChild(description);
            todoCard.appendChild(dueDate);
            todoCard.appendChild(notes);
            todoCard.appendChild(editTodoButton);
            todoCard.appendChild(deleteTodoButton);

            todoContainer.appendChild(todoCard);
        });
    }

    return { renderSidebar, renderContent, initialiseEventListeners };
})();

export default DomController;