import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'caro';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarla',
    'femenino': 'invitarlo',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = 'Melissa';
    this.genero = 'Fememino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue pipe

  persona = {
    Nombre: ' Fernando',
    Edad: 35,
    Direccion: ' Ottawa,Canada'

  }

  //json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //async pipe

  miObservable = interval(3000);    //0,1,2,3,4,
  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 2000);



  });


}