import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>El título {{title}}<my-tutorials></my-tutorials>linea</h1>
		<img [src]="imgLink">  
  
  
  `,
  styles: [`h1 { color: red}`]
})
export class AppComponent { 
	title: string;
	public imgLink = "http://lorempixel.com/400/200";
	constructor(){
		this.title = "Transformer 5";				
	}
}
