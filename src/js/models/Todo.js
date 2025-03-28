export default class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }

    edit(updatedFields) {
        Object.assign(this, updatedFields);
    }

    static fromJSON(json) {
        return Object.assign(new Todo(), json);
    }
}