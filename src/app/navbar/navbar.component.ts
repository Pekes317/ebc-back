import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  auth: boolean = JSON.parse(localStorage.getItem('ebcAuth'));

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  toHome() {
    this.fireAuth.auth.signOut()
      .then(() => this.router.navigate(['']))
      .catch(err => console.log(err));
  }

  toMain() {
    let path:string = this.auth ? 'back-office' : 'login';
    this.router.navigate([path]);
  }

  toCreate() {
    this.router.navigate(['signup']);
  }
}