'use strict';
const getTotalBalanceByGender = (users, gender) => {
  const totalBalanceByGender = users
    .filter(userGender => userGender.gender === gender)
    .map(arrayBalance => arrayBalance.balance)
    .reduce((totalBalance, number) => {
      return (totalBalance += number);
    }, 0);
  return totalBalanceByGender;
};

const allCustomer = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allCustomer, 'male')); // 12053

console.log(getTotalBalanceByGender(allCustomer, 'female')); // 8863
