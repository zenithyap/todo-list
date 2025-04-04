export default class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._status = status;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
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

    get status() {
        return this._status;
    }

    set status(newStatus) {
        this._status = newStatus;
    }

    static fromJSON(json) {
        return Object.assign(new Todo(), json);
    }
}