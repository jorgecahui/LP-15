package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "salidas")
public class Salida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_salida")
    private Long id;

    @Column(name = "repuesto", length = 100)
    private String repuesto;

    @Column(name = "cantidad_entregada")
    private int cantidadEntregada;

    @Column(name = "destinatario", length = 100)
    private String destinatario;

    @Column(name = "codigo", length = 20)
    private String codigo;

    @Column(name = "fecha_salida")
    private LocalDate fechaSalida;

    @Column(name = "estado", length = 20)
    private String estado;
}
