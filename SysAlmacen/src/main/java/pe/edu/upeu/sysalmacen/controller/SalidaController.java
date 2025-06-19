package pe.edu.upeu.sysalmacen.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upeu.sysalmacen.dtos.SalidaDTO;
import pe.edu.upeu.sysalmacen.service.SalidaService;

import java.util.List;

@RestController
@RequestMapping("/api/salidas")
@RequiredArgsConstructor
public class SalidaController {

    private final SalidaService salidaService;

    @GetMapping
    public ResponseEntity<List<SalidaDTO>> findAll() {
        return ResponseEntity.ok(salidaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SalidaDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(salidaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<SalidaDTO> save(@RequestBody SalidaDTO dto) {
        return ResponseEntity.ok(salidaService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SalidaDTO> update(@PathVariable Long id, @RequestBody SalidaDTO dto) {
        return ResponseEntity.ok(salidaService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        salidaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
