const buttonRef = document.querySelector('#task_01');

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});



const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});



buttonRef.addEventListener('click', () => {
  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
});
