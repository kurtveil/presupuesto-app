import { EgresoService } from './../egreso/egreso.service';
import { IngresoService } from './../ingreso/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;
  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService) { }

  ngOnInit() {
  }

  tipoOperacion(event) {
    this.tipo = event.target.value;
  }
  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicio.ingresos.push(new Ingreso (this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
