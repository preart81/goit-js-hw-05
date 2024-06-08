/**
 * This function takes an array of user objects and a gender and returns the total balance of users with the specified gender.
 *
 * @param {Array} users - An array of user objects.
 * @param {string} gender - The gender to filter by.
 * @returns {number} The total balance of users with the specified gender.
 */
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
