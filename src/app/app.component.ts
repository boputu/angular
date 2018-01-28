import { Component } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'primeraComponente'

})

export class AppComponent {
  title = 'app';
  nombre:string;
  apellidos:string;
  fecha:number;
  puesto:string;
  colores:number;
  carnet:number;


  fondo(event){
    this.colores = event.target.value;
  }

  conducir(event){
    this.carnet = event.target.value;
  }

  inputs(event){
    var id = event.target.id;
    if (id == 'nombre'){
      this.nombre = event.target.value;
    }else if(id == 'apellidos'){
      this.apellidos = event.target.value;
    }else if(id == 'fecha'){
      this.fecha = event.target.value;
    }else if(id == 'puesto'){
      this.puesto = event.target.value;
    }
    }

    }
    }
  }

}
