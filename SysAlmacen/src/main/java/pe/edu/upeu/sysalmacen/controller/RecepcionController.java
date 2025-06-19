package pe.edu.upeu.sysalmacen.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pe.edu.upeu.sysalmacen.dtos.RecepcionDTO;
import pe.edu.upeu.sysalmacen.mappers.RecepcionMapper;
import pe.edu.upeu.sysalmacen.model.Recepcion;
import pe.edu.upeu.sysalmacen.service.RecepcionService;

import java.util.List;

@RestController
@RequestMapping("/api/recepciones")
@RequiredArgsConstructor
public class RecepcionController {

    private final RecepcionService recepcionService;
    private final RecepcionMapper recepcionMapper;

    @GetMapping
    public List<RecepcionDTO> getRecepciones() {
        return recepcionMapper.toDtoList(recepcionService.obtenerTodas());
    }

    @GetMapping("/{id}")
    public RecepcionDTO getRecepcion(@PathVariable Long id) {
        return recepcionMapper.toDto(recepcionService.obtenerPorId(id));
    }

    @PostMapping
    public RecepcionDTO create(@RequestBody RecepcionDTO dto) {
        Recepcion saved = recepcionService.guardarRecepcion(recepcionMapper.toEntity(dto));
        return recepcionMapper.toDto(saved);
    }

    @PutMapping("/{id}")
    public RecepcionDTO update(@PathVariable Long id, @RequestBody RecepcionDTO dto) {
        Recepcion updated = recepcionService.actualizarRecepcion(id, recepcionMapper.toEntity(dto));
        return recepcionMapper.toDto(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        recepcionService.eliminarRecepcion(id);
    }

    @PostMapping("/{id}/validar")
    public void validar(@PathVariable Long id) {
        recepcionService.validarRecepcion(id);
    }
}


