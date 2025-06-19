package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "recepciones")
public class Recepcion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_recepcion")
    private Long id;

    @Column(name = "repuesto", length = 100)
    private String repuesto;

    @Column(name = "cantidad_recibida")
    private int cantidadRecibida;

    @Column(name = "proveedor", length = 100)
    private String proveedor;

    @Column(name = "codigo", length = 20)
    private String codigo;

    @Column(name = "fecha_recepcion")
    private LocalDate fechaRecepcion;

    @Column(name = "estado", length = 20)
    private String estado;
}