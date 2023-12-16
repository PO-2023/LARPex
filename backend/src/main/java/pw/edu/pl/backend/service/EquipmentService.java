package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEquipment;
import pw.edu.pl.backend.modelDto.EquipmentDto;
import pw.edu.pl.backend.repositoryMapper.IEquipmentRepositoryMapper;

@Service
public class EquipmentService implements IEquipment {

    @Autowired
    IEquipmentRepositoryMapper equipmentRepositoryMapper;
    @Override
    public EquipmentDto getPlayerEquipment(Long playerId) {
        return equipmentRepositoryMapper.getPlayerEquipment(playerId);
    }
}
