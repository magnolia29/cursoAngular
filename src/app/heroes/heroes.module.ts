import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //es un arreglo que indica que cosas contiene el modulo, o sea los componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //se indican las cosas visibles fuera del modulo
    exports:[
        ListadoComponent
    ],
    //solo van modulos
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}