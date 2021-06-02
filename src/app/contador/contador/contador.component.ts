import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <!--para que el titulo declarado en el appcomponent.ts aparezca aqui-->
    <!--Acepta codigo de JS-->
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <!--no se aconseja que se ponga logica en el template-->
    <button (click)="acumular(+base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{
    //es el nombre del proyecto por defecto
    titulo:string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number){
    this.numero += valor;
    }
}