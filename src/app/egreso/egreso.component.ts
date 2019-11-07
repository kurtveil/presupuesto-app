import { EgresoService } from './egreso.service';
import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

egresos: Egreso [] = [];
@Input() ingresoTotal: number;
  constructor(private egresoServicio: EgresoService
    ) { }

  ngOnInit() {
    this.egresos = this.egresoServicio.egresos;
  }
  eliminarEgresos(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }

}
