import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {
  // el ActivatedRoute nos permite subscribirnos a cualquier cambio de url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id))
      )
      .subscribe(resp => {
        console.log(resp)
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
