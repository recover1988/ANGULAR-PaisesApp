import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { };

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
      complete: () => console.info("Este es el complete: ", 'complete')
    })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
