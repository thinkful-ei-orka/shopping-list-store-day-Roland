import item from './item.js';
    const items = [];
    const hideCheckedItems = false;

    
const findById = function(id) {
        return this.items.find(item => item.id === id);
};
    
const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));

    } catch (error) {
        console.log(error);
    }
};
//line
const findAndToggleChecked = function(id) {
    const item = this.findById(id);
    item.checked = !checked;
}

const findAndUpdateName = function(id, name) {
    try {
        item.validateName(name);
        this.findById(id).name = name;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}

const findAndDelete = function(id) {
    const objToDel = this.findById(id);
    const deleteIndexNum = this.items.indexOf(objToDel);
    this.items.splice(deleteIndexNum, 1);
}

export default {
    items,
    hideCheckedItems,
    addItem,
    findAndUpdateName,
    findAndToggleChecked,
    findAndDelete,
    findById
};
