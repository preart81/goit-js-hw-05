/**
 * This function takes an array of user objects and sorts them by the number of friends in descending order.
 *
 * @param {Array} users - An array of user objects.
 * @returns {Array} An array of user objects sorted by the number of friends in descending order.
 */
const sortByDescendingFriendCount = (users) =>
  users.toSorted((user1, user2) => user2.friends.length - user1.friends.length);

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male",
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female",
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female",
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
