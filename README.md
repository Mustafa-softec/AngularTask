# Angular Tips

## 1- typeScript features:

  - static types => set data types for varaibles 
  - interfaces
  - class properties
  - public/privet accesibility


 ---------------------------------------

 ## 2- angular component hierarchy  

   - a tree structure starts with the root component
   - angular modules are a container to group all components 
   - browser loads modules with all its components
   - componnents, pipes and directive are regiterd and available for amodule
   - services or providers are registered in root injector so they are avalibels across angular modules

---------------------------------------

# Binding

## 1- one way binding

bind object from the component to html template 
ex:
 <h2>{{object.name}}</h2>

# MTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
