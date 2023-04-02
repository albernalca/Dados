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
  dadoDerecha = 'assets/img/dice3.png'
  numero1: number
  numero2: number

  constructor(){
    this.numero1 = 1
    this.numero2 = 2
  }


  //Creo metetodo que genere un número aleatorio entre 1 y 6, lo redondea  al entero mas cercano
  lanzarDados(): void {
    //Math.random = función que devuelve un númnero entre 0 y 1
    /*Math.round = función regla de redondeo estandar, si # >= 0.5 redondea al número mas cercano hacia arriba 
    si <= 05 se redondea al nuúmero mas cercano hacia abajo */
    this.numero1 = Math.round(Math.random() * 5) + 1
    //la función Math.random la multiplico por 5 y le sumo 1, con el fin de redondear a 1 y o a cero
    this.numero2 = Math.round(Math.random() * 5) + 1
    //lo utilizo para asignar una imagen a la etiqueta img del html de acuerdo al evento del boton
    this.dadoIzquierda = 'assets/img/dice' + this.numero1 + '.png'
    this.dadoDerecha = 'assets/img/dice' + this.numero2 + '.png'
  }

}
