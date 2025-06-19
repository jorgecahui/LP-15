package pe.edu.upeu.sysalmacen.dtos;
import lombok.Data;

import java.time.LocalDate;
@Data
public class SalidaDTO {
    private Long id;
    private String repuesto;
    private int cantidadEntregada;
    private String destinatario;
    private String codigo;
    private LocalDate fechaSalida;
    private String estado;
}
