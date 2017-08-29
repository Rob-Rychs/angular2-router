import { Injectable } from '@angular/core';
import { User } from '../models/user';

// expect it with promise 
const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Rob',
    username: 'Rob-Rychs',
    githubURL: 'https://github.com/Rob-Rychs',
    avatar: 'https://avatars0.githubusercontent.com/u/16437897?v=4&s=460'
  },
  {
    id: 2,
    name: 'Jeff',
    username: 'jefe',
    githubURL: 'https://github.com/temefleet',
    avatar: 'https://avatars1.githubusercontent.com/u/8882336?v=4&s=460'
  },
  {
    id: 3,
    name: 'Lucas',
    username: 'RedLucas',
    githubURL: 'https://github.com/RedLucas',
    avatar: 'https://avatars2.githubusercontent.com/u/8796324?v=4&s=460'
  }
]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find specific user
  getUser(username) {

    //es6
    return usersPromise.then(users => users.find(user => user.username === username));

    //es5
    // let user = usersPromise.then(users => {
    //   return users.find(user => {
    //     return user.username === username;
    //   });
    // });
  }

}
