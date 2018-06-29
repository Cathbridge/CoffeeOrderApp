import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

name: string;
order: number;
valueOne : number;
whipped : boolean;
wCoffee : string;
chocolate: boolean;
chocCoffee: string;

price: number;

  constructor(public navCtrl: NavController) {
    this.order= 0;
      this.valueOne = 0;
      this.price = 10;
  }

  onOrder(){
    this.price = this.price * this.valueOne;

    if(this.name == null){
      alert("Please enter your name ")

    }else if(this.valueOne == 0){
      alert("Please enter quantity")
    }

    if(this.whipped == true){
      // console.log(this.wCoffee)
      this.price += 5;
      this.wCoffee = "+Whipped Cream";
    }
     if(this.chocolate == true){
      this.price += 2;
      this.chocCoffee = "Chocolate";
    }
   

    if(this.valueOne!= 0){
    this.order =1;
    }
    
      
  }

  onAdd(num: Number){
    
    if(num === 1){
    this.valueOne += 1;
    }else if(num=== 0 && this.valueOne > 0) 
    { this.valueOne -= 1;
      
    }
  }

  onReset(){
    this.valueOne=0;
    this.whipped= false;
    this.chocolate= false;
    this.price=0;
    this.name= "";
  }




}
