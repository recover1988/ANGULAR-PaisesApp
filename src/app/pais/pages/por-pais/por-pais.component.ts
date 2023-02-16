import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { };

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log("Este es el next: ", paises)
        this.paises = paises
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
        console.error("Este es el error: ", err)
      },
      complete: () => console.info("Este es el complete: ", 'complete')
    })
  }
}
