class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class UserService {
  constructor(name) {
    this.name = name;
    this.users = {};
    this.listeners = {};
  }

  addUser(user) {
    if (!this.users[user.id] || this.users[user.id].name !== user.name) {
      this.users[user.id] = user;
      this.notify('addUser', user);
    }
  }

  deleteUser(user) {
    const userToDelete = this.users[user.id];
    if (userToDelete && userToDelete.name === user.name) {
      delete this.users[user.id];
      this.notify('deleteUser', user);
    }
  }

  getUsers() {
    const result = [];
    for (let userId in this.users) {
      result.push(this.users[userId]);
    }
    return result;
  }

  registerListener(service) {
    if (!this.listeners[service.name]) {
      this.listeners[service.name] = service;
    }
  }

  deregisterListener(service) {
    if (this.listeners[service.name]) {
      delete this.listeners[service.name];
    }
  }

  notify(command, user) {
    for (let serviceName in this.listeners) {
      const service = this.listeners[serviceName];
      if (service) {
        switch (command) {
          case 'addUser':
            return service.addUser(user);
          case 'deleteUser':
            return service.deleteUser(user);
          default:
            break;
        }
      }
    }
  }
}

const service1 = new UserService('u1');
service1.addUser(new User('mary', 1));
service1.addUser(new User('mary', 1));
console.log(service1.getUsers());

service1.deleteUser(new User('mary', 1));
console.log(service1.getUsers());

const service2 = new UserService('u2');

service1.registerListener(service2);
service1.addUser('su', 2);
console.log(service1.getUsers());
console.log(service2.getUsers());
