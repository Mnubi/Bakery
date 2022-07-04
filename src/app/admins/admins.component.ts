import { Component, OnInit } from '@angular/core';
import { Cake, Requests } from '../requests';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  cakes: Cake[] = [
    new Cake('Love', 'Special touch of vanilaa cream', 6450,
    ),
    new Cake('Dark Forest', 'life best vanilla cake', 5235),
    new Cake('Snow White', 'White chocolate cream', 18760),
    new Cake('Mother Teressa', 'Glutten free cake', 23845),
    new Cake('Lupita Nyongo', 'Actor', 18760)
  ];

  addNewCake(cake: any) {
    let cakeLength = this.cakes.length;
    cake.id = cakeLength + 1;
    this.cakes.push(cake)
  }

  constructor() { }

  ngOnInit(): void {

  }


  displatyle = "none";

  openPopu() {
    this.displatyle = "block";
  }

  closePopu() {
    this.displatyle = "none";
  }

  dispstyle = "none";

  openPop() {
    this.dispstyle = "block";
  }

  closePop() {
    this.dispstyle = "none";
  }


}
