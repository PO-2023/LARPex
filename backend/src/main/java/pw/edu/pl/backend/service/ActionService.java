package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.entity.EquipmentItemEn;
import pw.edu.pl.backend.interfaces.IActionService;
import pw.edu.pl.backend.modelDto.ActionDto;
import pw.edu.pl.backend.modelDto.ActionResultDto;
import pw.edu.pl.backend.modelDto.ActionType;
import pw.edu.pl.backend.repository.EquipmentItemRepository;
import pw.edu.pl.backend.repository.ItemRepository;
import pw.edu.pl.backend.repositoryMapper.IEquipmentRepositoryMapper;

import java.util.Optional;

@Service
public class ActionService implements IActionService {

    @Autowired
    IEquipmentRepositoryMapper equipmentRepositoryMapper;
    @Autowired
    EquipmentItemRepository equipmentItemRepository;
    @Autowired
    ItemRepository itemRepository;

    public ActionResultDto runQRAction(ActionDto actionDto) {
        if (actionDto.getActionType() == ActionType.ADD_ITEM) {

            var equipment = equipmentRepositoryMapper.getPlayerEquipment(actionDto.getPlayerId());
            if (equipment == null) {
                return new ActionResultDto("Player equipment not exist", "Failed");
            }

            Optional<EquipmentItemEn> existingItem = equipmentItemRepository
                    .findByEquipmentIdAndItemId(equipment.getId(), actionDto.getItemId())
                    .stream()
                    .findFirst();

            if (existingItem.isEmpty()) {
                if (itemRepository.existsById(actionDto.getItemId())) {
                    EquipmentItemEn newItem = new EquipmentItemEn();
                    newItem.setEquipmentId(equipment.getId());
                    newItem.setItemId(actionDto.getItemId());
                    equipmentItemRepository.save(newItem);
                    return new ActionResultDto("Added new item", "Success");
                } else {
                    return new ActionResultDto("Item id does not exist", "Failed");
                }
            }

            int currentQuantity = existingItem.get().getQuantity() != null ? existingItem.get().getQuantity() : 0;
            existingItem.get().setQuantity((int) (currentQuantity + actionDto.getItemQuantity()));
            equipmentItemRepository.save(existingItem.get());
            return new ActionResultDto("Added quantity to item", "Success");
        } else {
            return new ActionResultDto("Action type only ADD_ITEM ", "Failed");

        }
    }

}
