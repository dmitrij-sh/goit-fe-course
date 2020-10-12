// Именнованый експорт (по одному или всех) если нужно все импортировать то пишим import * as services from './path'
export const fetchAllUsers = () => {
  console.log('log fetchAllUsers');
};

export const fetchUsersById = id => {
  console.log('log fetchUsersById');
};

export const updateUsersById = id => {
  console.log('log updateUsersById');
};

export const x = 5;

export default { fetchAllUsers, fetchUsersById };

fetchUsersById(5);
