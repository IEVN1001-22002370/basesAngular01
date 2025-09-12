import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Poder mandar llamar los componentes
  templateUrl: './app.component.html', //Manda a llamar el archivo HTML
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola, Máximo Décimo Meridio, Comandante de los ejércitos del Norte, General de las Legiones Félix, Leal servidor del verdadero emperador Marco Aurelio. Padre de un hijo asesinado, esposo de una esposa asesinada, y tendré mi venganza, en esta vida o en la otra';

  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"El padrino",
    anio: 1972,
    genero: "Crimen/Drama"
  }
}
