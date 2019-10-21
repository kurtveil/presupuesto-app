import { Egreso } from './egreso.model';

export class EgresoService {
    egresos: Egreso [] = [
        new Egreso('Arriendo Apto', 900),
        new Egreso('Ropa', 300)
    ];
}