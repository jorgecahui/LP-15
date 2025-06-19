export class Recepcion {
  constructor(
    public id: number | null = null,
    public repuesto: string,
    public cantidadRecibida: number,
    public proveedor: string,
    public codigo: string,
    public fechaRecepcion: Date,
    public estado: string
  ) {}
}
