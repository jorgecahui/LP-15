package pe.edu.upeu.sysalmacen.dtos;

import lombok.Data;
import java.time.LocalDate;

@Data
public class RecepcionDTO {
    private Long id;
    private String repuesto;
    private int cantidadRecibida;
    private String proveedor;
    private String codigo;
    private LocalDate fechaRecepcion;
    private String estado;
}
