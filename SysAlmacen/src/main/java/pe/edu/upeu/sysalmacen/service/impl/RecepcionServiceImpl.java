package pe.edu.upeu.sysalmacen.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.upeu.sysalmacen.model.Recepcion;
import pe.edu.upeu.sysalmacen.repository.RecepcionRepository;
import pe.edu.upeu.sysalmacen.service.RecepcionService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecepcionServiceImpl implements RecepcionService {

    private final RecepcionRepository recepcionRepo;

    @Override
    public List<Recepcion> obtenerTodas() {
        return recepcionRepo.findAll();
    }

    @Override
    public Recepcion obtenerPorId(Long id) {
        return recepcionRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Recepción no encontrada"));
    }

    @Override
    public Recepcion guardarRecepcion(Recepcion recepcion) {
        return recepcionRepo.save(recepcion);
    }

    @Override
    public Recepcion actualizarRecepcion(Long id, Recepcion recepcion) {
        Recepcion existente = obtenerPorId(id);
        existente.setRepuesto(recepcion.getRepuesto());
        existente.setCantidadRecibida(recepcion.getCantidadRecibida());
        existente.setProveedor(recepcion.getProveedor());
        existente.setCodigo(recepcion.getCodigo());
        existente.setFechaRecepcion(recepcion.getFechaRecepcion());
        existente.setEstado(recepcion.getEstado());
        return recepcionRepo.save(existente);
    }

    @Override
    public void eliminarRecepcion(Long id) {
        recepcionRepo.deleteById(id);
    }

    @Override
    public void validarRecepcion(Long id) {
        Recepcion rec = obtenerPorId(id);
        rec.setEstado("VALIDADO");
        recepcionRepo.save(rec);
    }
}

