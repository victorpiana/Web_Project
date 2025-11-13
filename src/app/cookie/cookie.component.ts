import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cookieAvertissement:string='Ce site utilise des cookies pour vour garantir la meilleur expérience';
  acceptCookies() {
    // Logique pour accepter les cookies
    console.log("Cookies acceptés");
    this.cookieAvertissement = '';
  }

  declineCookies() {
    // Logique pour refuser les cookies
    console.log("Cookies refusés");
    this.cookieAvertissement = '';
  }
}
