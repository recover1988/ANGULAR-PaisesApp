import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

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

  buscar() {
    this.hayError = false;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp) => {
        console.log("Este es el next: ", resp)

      },
      error: (err) => {
        this.hayError = true;
        console.error("Este es el error: ", err)
      },
      complete: () => console.info("Este es el complete: ", 'complete')
    })
  }
}
