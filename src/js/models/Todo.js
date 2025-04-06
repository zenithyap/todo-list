export default class Todo {
    constructor(title, dueDate, priority, notes) {
        this._title = title;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(newDueDate) {
        this._dueDate = newDueDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }

    get notes() {
        return this._notes;        
    }

    set notes(newNotes) {
        this._notes = newNotes;
    }

    static fromJSON(json) {
        return Object.assign(new Todo(), json);
    }
}