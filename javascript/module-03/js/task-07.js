const buttonRef = document.querySelector('#task_07');
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
  balance: 0,
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {};
    transaction.id = this.transactions.length + 1;
    transaction.amount = amount;
    transaction.type = type;
    return transaction;

    // const transaction = {
    //   id: this.transactions.length + 1,
    //   amount,
    //   type,
    // };
    // return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
    console.log(`Пополнение успешно! Ваш баланс ${this.balance}`);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return console.log('Недостаточно средств!')
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
    console.log(`Снятие средств успешно! Ваш баланс ${this.balance}`);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

// buttonRef.addEventListener('click', () => {});
