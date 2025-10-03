import { Component } from '@angular/core';
import { CalculadoraResistencia, CalculoResultado } from './operaccionesResistencia';

@Component({
  selector: 'app-resitencias',
  standalone: false,
  templateUrl: './resitencias.component.html',
  styleUrl: './resitencias.component.css'
})
export class ResitenciasComponent {

  private calculadora: CalculadoraResistencia = new CalculadoraResistencia();

  banda1: string = '';
  banda2: string = '';
  banda3: string = '';
  tolerancia: string = '';


  color1: string = '';
  valor1: number = 0;

  color2: string = '';
  valor2: number = 0;

  color3: string = '';
  toleranciaR: string = '';

  resultado: number = 0;
  resultadoMin: number = 0;
  resultadoMax: number = 0;


  errorMessage: string = '';

  calcular(): void {

    const result: CalculoResultado = this.calculadora.calcular(
      this.banda1,
      this.banda2,
      this.banda3,
      this.tolerancia
    );

    if (result.error) {

      this.errorMessage = result.error;

      this.resultado = 0;
      this.resultadoMin = 0;
      this.resultadoMax = 0;
      this.color1 = '';
      this.valor1 = 0;
      this.color2 = '';
      this.valor2 = 0;
      this.color3 = '';
      this.toleranciaR = '';

      console.error(result.error);
    } else {
      this.resultado = result.resultado;
      this.resultadoMin = result.resultadoMin;
      this.resultadoMax = result.resultadoMax;
      this.color1 = result.color1;
      this.valor1 = result.valor1;
      this.color2 = result.color2;
      this.valor2 = result.valor2;
      this.color3 = result.color3;
      this.toleranciaR = result.toleranciaR;
    }
  }
}
