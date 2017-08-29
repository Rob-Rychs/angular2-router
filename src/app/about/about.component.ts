import { Component, OnInit } from '@angular/core';

export class User {
  id: number;
  name: string;
  username: string;
  githubURL: string;
  avatar: string;
}
const users: User[] = [
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
]
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[] = users;
  constructor() { }

  ngOnInit() {
  }

}
