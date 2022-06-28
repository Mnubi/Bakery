import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cake } from '../requests';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  newCake = new Cake('','',0);
  @Output() addCake = new EventEmitter<Cake>();

  submitted=false;

  onSubmit(){ this.submitted=true;

  }

  addProduct(){
    this.addCake.emit(this.newCake);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}