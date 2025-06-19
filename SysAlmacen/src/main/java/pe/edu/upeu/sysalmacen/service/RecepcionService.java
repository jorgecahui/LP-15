package pe.edu.upeu.sysalmacen.service;

import pe.edu.upeu.sysalmacen.model.Recepcion;

import java.util.List;

public interface RecepcionService {
    List<Recepcion> obtenerTodas();
    Recepcion obtenerPorId(Long id);
    Recepcion guardarRecepcion(Recepcion recepcion);
    Recepcion actualizarRecepcion(Long id, Recepcion recepcion);
    void eliminarRecepcion(Long id);
    void validarRecepcion(Long id);
}