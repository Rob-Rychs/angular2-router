import { Component, OnInit } from '@angular/core';
import { AboutComponent  } from '../about/about.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {
user: User;

  constructor(
    private route: ActivatedRoute, 
    private service: UserService,
    private router: Router
  ) {}

  
    ngOnInit() {
      //grab the current username with params as an observable
      let username = this.route.snapshot.params['username'];
   

      this.service.getUser(username).then(user => {
        this.user = user;
      });
    }

    goBack() {
      // use browser history 
      // window.history.back();
      this.router.navigate(['./about']);
    }
  }
