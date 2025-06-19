export class Salida {
  constructor(
    public id: number,
    public repuesto: string,
    public cantidadSalida: number,
    public responsable: string,
    public codigo: string,
    public fechaSalida: Date,
    public estado: string
  ) {}
}

