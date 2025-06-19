package pe.edu.upeu.sysalmacen.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.upeu.sysalmacen.dtos.SalidaDTO;
import pe.edu.upeu.sysalmacen.mappers.SalidaMapper;
import pe.edu.upeu.sysalmacen.model.Salida;
import pe.edu.upeu.sysalmacen.repository.SalidaRepository;
import pe.edu.upeu.sysalmacen.service.SalidaService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalidaServiceImpl implements SalidaService {

    private final SalidaRepository salidaRepository;
    private final SalidaMapper salidaMapper;

    @Override
    public List<SalidaDTO> findAll() {
        return salidaMapper.toDtoList(salidaRepository.findAll());
    }

    @Override
    public SalidaDTO findById(Long id) {
        return salidaRepository.findById(id)
                .map(salidaMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Salida no encontrada"));
    }

    @Override
    public SalidaDTO save(SalidaDTO dto) {
        Salida entity = salidaMapper.toEntity(dto);
        return salidaMapper.toDto(salidaRepository.save(entity));
    }

    @Override
    public SalidaDTO update(Long id, SalidaDTO dto) {
        Salida salida = salidaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Salida no encontrada"));
        dto.setId(id);
        return salidaMapper.toDto(salidaRepository.save(salidaMapper.toEntity(dto)));
    }

    @Override
    public void delete(Long id) {
        salidaRepository.deleteById(id);
    }
}