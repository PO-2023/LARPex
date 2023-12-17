package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pw.edu.pl.backend.entity.EquipmentEn;
import pw.edu.pl.backend.model.Equipment;

@Mapper
public interface EquipmentMapper {
    EquipmentMapper INSTANCE = Mappers.getMapper(EquipmentMapper.class);

    Equipment mapToEquipment(EquipmentEn equipment);
}
