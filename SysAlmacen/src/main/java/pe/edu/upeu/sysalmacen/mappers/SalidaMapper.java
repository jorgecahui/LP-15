package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import pe.edu.upeu.sysalmacen.dtos.SalidaDTO;
import pe.edu.upeu.sysalmacen.model.Salida;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SalidaMapper {
    SalidaDTO toDto(Salida entity);
    Salida toEntity(SalidaDTO dto);
    List<SalidaDTO> toDtoList(List<Salida> entities);
}
