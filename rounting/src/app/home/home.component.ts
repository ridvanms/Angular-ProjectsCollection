import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  isLoggedIn = !this.authService.loggedIn;
  onLoadServer() {
    this.router.navigate(["/servers"]);
  }

  onLogIn() {
    this.authService.login();
  }
  onLogOut() {
    this.authService.logout();
  }
}
