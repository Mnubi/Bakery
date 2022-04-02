import { Component, OnInit } from '@angular/core';
import { Cake, Requests } from '../requests';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  cakes: Cake[] = [
    new Cake('Martin Luther Jr', 'hghgags', 6450),
    new Cake('Maya Angelou', 'life best vanilla cake', 5235),
    new Cake('Lupita Nyongo', 'Actor', 18760),
    new Cake('Mother Teressa', 'Nun', 23845)
  ]

  ngOnInit(): void {
  }

}
