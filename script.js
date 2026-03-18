const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

const logger1 = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger1);
delay(1000).then(logger1);
delay(1500).then(logger1);

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });
};

const logger2 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger2);
toggleUserState(users, "Lux").then(logger2);
