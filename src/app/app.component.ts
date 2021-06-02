import { Component } from '@angular/core';

@Component({
  //nombre del componente, aparece dentro del index.html
  selector: 'app-root',
  //si tiene una contraparte del html, indica la ruta
  templateUrl: './app.component.html',
  //template admite una string a diferencia del anterior
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
