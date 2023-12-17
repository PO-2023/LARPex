package pw.edu.pl.backend.repositoryMapper;

import pw.edu.pl.backend.modelDto.EquipmentDto;

public interface IEquipmentRepositoryMapper {
    EquipmentDto getPlayerEquipment(Long playerId);
}
