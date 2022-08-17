import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularArabcBookCode';
  inputValueText = "test property binding";
  num: number = 5;
  red = true;
  green = false;

  inputValueText2="";
  inputValueText3="";


  ngOnInit(): void {

  }

  changeColor() {

    this.red = !this.red;
    this.green = !this.green;
    console.log("red: " + this.red);
    console.log("green: " + this.green);
  }
  onClickBtn(event:Event):void{
  console.log(event.target);
  }

}
