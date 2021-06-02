import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  //se declara un arreglo de tipo string
  heroes: string[]=['Monkey D. Luffy','Saitama','Rin','Tanjiro','Gin'];
  heroeBorrado:string='';

  borrarHeroe():void{
    //remueve el primer elemento
    this.heroeBorrado=this.heroes.shift() || '';
    //remueve el ultimo elemento
    //this.heroes.pop();

    
  }
}
