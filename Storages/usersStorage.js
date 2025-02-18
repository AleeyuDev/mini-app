// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addUser({ firstName, lastName , Email, Age, Bio}) {
      const id = this.id;
      this.storage[id] = { id, firstName, lastName, Email, Age, Bio  };
      this.id++;
    }
  
    getUsers() {
      return Object.values(this.storage);
    }
  
    getUser(id) {
      return this.storage[id];
    }
  
    updateUser(id, { firstName, lastName, Email, Age, Bio }) {
      this.storage[id] = { id, firstName, lastName, Email, Age, Bio };
    }
  
    deleteUser(id) {
      delete this.storage[id];
    }
  }
  // Rather than exporting the class, we can export an instance of the class by instantiating it.
  // This ensures only one instance of this class can exist, also known as the "singleton" pattern.
  module.exports = new UsersStorage();
  