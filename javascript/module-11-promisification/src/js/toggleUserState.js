const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve =>
    resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    ),
  );
};

const logger = updatedUsers => console.table(updatedUsers);

// Сейчас работает так
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

// Должно работать так
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
