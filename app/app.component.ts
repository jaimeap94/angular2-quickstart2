import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>El título {{title}}<my-tutorials></my-tutorials>linea</h1>
		<img [src]="imgLink">  
 		<h4 [class.myClass]="applyClass">Este texto es h4 con myClass</h4> 
		<h4 [style.color]="applyblue ? 'blue' : 'red'">Otra forma de aplicar el estilo</h4>
  		 
  `,
  styles: [`h1 { color: red}
 	.myClass { color: green;} 
  `]
})
export class AppComponent { 
	title: string;
	public applyClass = false;
	public applyblue = true;
	public imgLink = "http://lorempixel.com/400/200";
	constructor(){
		this.title = "Transformer 5";				
	}
}
