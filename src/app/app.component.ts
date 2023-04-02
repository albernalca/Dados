import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Juego Dados';
  //Variables
  dadoIzquierda = 'assets/img/dice1.png'
  dadoDerecha = 'assets/img/dice4.png'
  numero1: number
  numero2: number

  constructor(){
    this.numero1 = 0
    this.numero2 = 0
  }


  //Creo metetodo que genere un número aleatorio entre 1 y 6, lo redondea  al entero mas cercano
  lanzarDados(): void {
    //Math.random = función que devuelve un númnero entre 0 y 1
    /*Math.round = función regla de redondeo estandar, si # >= 0.5 redondea al número mas cercano hacia arriba 
    si <= 05 se redondea al nuúmero mas cercano hacia abajo */
    this.numero1 = Math.round(Math.random() * 5) + 1
    //la función Math.random la multiplico por 5 y le sumo 1, con el fin de que me redondee a 1 y o a cero
    this.numero2 = Math.round(Math.random() * 5) + 1

    console.log(this.numero1);
    console.log(this.numero2);
  }

}
