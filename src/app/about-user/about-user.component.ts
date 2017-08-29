import { Component, OnInit } from '@angular/core';
import { User, AboutComponent  } from '../about/about.component';
import { ActivatedRoute } from '@angular/router';


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
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {
user;
  constructor(private route: ActivatedRoute) {}

  
    ngOnInit() {
      //grab the current username with params as an observable
      let username = this.route.snapshot.params['username'];
   
      this.user = users.find(function(user) {
        return user.username === username;
      });
      console.log(username);
    }
  }
