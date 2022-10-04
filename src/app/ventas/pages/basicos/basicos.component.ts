import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Carol'
  nombreUpper: string = 'VILLAMIL'
  nombreCompleto: string = 'CarOl villAmil'

  fecha: Date = new Date(); // el dia de hoy

}
