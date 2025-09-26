import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  numCompradores: string = '';
  cantidadBol: string = '';
  cineco: string = '';
  resultado: number = 0;
  resultadoFinal: number=0;

  calcular(): void {
    if (parseInt(this.cantidadBol) <= parseInt(this.numCompradores) * 7) {

      if (parseInt(this.cantidadBol) > 5) {
        this.resultado = (parseInt(this.cantidadBol)*12) * 0.85;
      }

      else if (parseInt(this.cantidadBol) >= 3) {
        this.resultado = (parseInt(this.cantidadBol)*12) * 0.90;
      }

      if (this.cineco === 'Si') {
        this.resultadoFinal = this.resultado * .90;
      }


    } else {
      alert("No puede comprar esa cantidad de boletos");
    }

  }

}
