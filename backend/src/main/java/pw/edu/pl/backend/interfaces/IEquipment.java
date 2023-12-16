package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EquipmentDto;

public interface IEquipment {
    EquipmentDto getPlayerEquipment(Long id);
}
