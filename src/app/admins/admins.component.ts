import { Component, OnInit } from '@angular/core';
import { Cake, Requests } from '../requests';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  cakes: Cake[] = [
    new Cake('Martin Luther Jr', 'hghgags', 6450,
    ),
    new Cake('Maya Angelou', 'life best vanilla cake', 5235),
    new Cake('Lupita Nyongo', 'Actor', 18760),
    new Cake('Mother Teressa', 'Nun', 23845),
    new Cake('Lupita Nyongo', 'Actor', 18760),
    new Cake('Mother Teressa', 'Nun', 23845)
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
