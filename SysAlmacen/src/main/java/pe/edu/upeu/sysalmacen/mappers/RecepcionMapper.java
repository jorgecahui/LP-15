package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import pe.edu.upeu.sysalmacen.dtos.RecepcionDTO;
import pe.edu.upeu.sysalmacen.model.Recepcion;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RecepcionMapper {
    RecepcionDTO toDto(Recepcion entity);
    Recepcion toEntity(RecepcionDTO dto);
    List<RecepcionDTO> toDtoList(List<Recepcion> entities);
}