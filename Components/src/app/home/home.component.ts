import { Component, OnInit, DoCheck } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  clicks = 0;
  hp = 1000;

  title = "Please don't hurt me...";

  elon;


  constructor() { }

  ngOnInit() {
    this.elon  = {
      name: "Elon Musk",
      born: "June 28, 1971",
      networth: "22.6 billion USD (2018)",
      companies: of(["PayPal", "SpaceX", "Tesla", "SolarCity"])
    }  
  }

  ngDoCheck() {
    console.log("Hello!");
  }

  handleClick() {
    this.hp -= 50;
    this.clicks++;
    this.title = "Stop! You already clicked me "+this.clicks+" times!";
  }

}
