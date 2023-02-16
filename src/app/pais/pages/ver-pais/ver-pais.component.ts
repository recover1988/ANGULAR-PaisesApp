import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {
  // el ! le indica a typescript que la varialbe puede ser null
  pais!: Country;

  // el ActivatedRoute nos permite subscribirnos a cualquier cambio de url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log) // usa el observable que tiene adelentae
      )
      .subscribe((paises: Country[]) => {
        console.log('Este es: ', paises[0])
        return this.pais = paises[0]
      })
    // activatedRoute.params nos da mediante el subscribe le param que viene por el path dinamico de la ruta
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais)
    //       })
    //   })
  };

}
