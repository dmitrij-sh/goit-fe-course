const buttonRef = document.querySelector('#task_02');
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.bind(inventory)(itemName);
};

buttonRef.addEventListener('click', () => {
  invokeInventoryAction('Medkit', inventory.add);

console.log(inventory.items);

invokeInventoryAction('Gas mask', inventory.remove);

console.log(inventory.items);
});
