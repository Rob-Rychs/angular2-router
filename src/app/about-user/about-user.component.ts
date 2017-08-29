import { Component, OnInit } from '@angular/core';
import { AboutComponent  } from '../about/about.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {
user: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  
    ngOnInit() {
     this.route.data.forEach(data => {
       this.user = data.user;
     });
    }

    goBack() {
      // use browser history 
      // window.history.back();
      this.router.navigate(['./about']);
    }
  }
