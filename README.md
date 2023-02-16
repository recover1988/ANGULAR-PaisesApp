# PaisesApp

Esta aplicacion usa la API de:

```
https://restcountries.com/#api-endpoints-v3-full-name
https://restcountries.com/v2
```

## Actualizacion

suscribe:
` this.paisService.buscarPais(this.termino).subscribe({
      next: (v) => {
        console.log("Este es el next: ", v)
      },
      error: (e) => {
        this.hayError = true;
        console.error("Este es el error: ", e)
      },
      complete: () => console.info("Este es el complete: ", 'complete')
    })`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.
'
## Debounce time
Se aconseja usarlo cuando hay que hacer muchas consultas al servidor

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
