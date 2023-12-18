package pw.edu.pl.backend.repositoryMapper;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.entity.EquipmentEn;
import pw.edu.pl.backend.entity.EquipmentItemEn;
import pw.edu.pl.backend.entity.ItemEn;
import pw.edu.pl.backend.entity.PlayerEn;
import pw.edu.pl.backend.mapper.CharacterMapper;
import pw.edu.pl.backend.mapper.EquipmentMapper;
import pw.edu.pl.backend.mapper.GameMapper;
import pw.edu.pl.backend.mapper.PlayerMapper;
import pw.edu.pl.backend.model.Character;
import pw.edu.pl.backend.model.Equipment;
import pw.edu.pl.backend.model.Player;
import pw.edu.pl.backend.modelDto.EquipmentDto;
import pw.edu.pl.backend.modelDto.ItemDto;
import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.repository.EquipmentItemRepository;
import pw.edu.pl.backend.repository.EquipmentRepository;
import pw.edu.pl.backend.repository.ItemRepository;
import pw.edu.pl.backend.repository.PlayerRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EquipmentRepositoryMapper implements IEquipmentRepositoryMapper{

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    EquipmentItemRepository equipmentItemRepository;

    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    ItemRepository itemRepository;

    @Override
    public EquipmentDto getPlayerEquipment(Long playerId) {
        Player player = playerRepository.findById(playerId)
                .map(PlayerMapper.INSTANCE::mapToPlayer)
                .orElse(null);
        if(player == null) {
            return null;
        }
        Equipment equipment = equipmentRepository.findById(player.getEquipmentId())
                .map(EquipmentMapper.INSTANCE::mapToEquipment)
                .orElse(null);
        if(equipment == null) {
            return null;
        }
        System.out.println(equipment.getSize());
        List<EquipmentItemEn> equipmentItemEnList = equipmentItemRepository.findByEquipmentId(equipment.getId());

        List<ItemDto> listOfItemDtos2 = equipmentItemEnList.stream()
                .map(equipmentItemEn -> {
                    ItemEn itemEn = itemRepository.findById(equipmentItemEn.getItemId()).orElse(null);
                    if(itemEn == null) {
                        return null;
                    }
                    return new ItemDto(itemEn.getId(), itemEn.getName(), itemEn.getType(), itemEn.getDescription(), equipmentItemEn.getQuantity(), itemEn.getWeight().floatValue(), itemEn.getPictureUrl());
                }).toList();


        List<Long> itemIdList = equipmentItemEnList.stream().map(EquipmentItemEn::getItemId).toList();
        List<ItemEn> itemEnListUniqueValues = itemRepository.findAllById(itemIdList);
        List<ItemEn> itemEnList = new ArrayList<>();
        for(Long id : itemIdList) {
            for(ItemEn item : itemEnListUniqueValues) {
                if(item.getId() == id) {
                    itemEnList.add(item);
                    break;
                }
            }
        }

        List<ItemDto> listOfItemDtos = convertItemEnListToItemDtoList(itemEnList);


//        idk czy max size to jest to samo co max capacity
        EquipmentDto equipmentDto = new EquipmentDto(equipment.getId(), player.getId(), equipment.getSize(), listOfItemDtos2);

        return equipmentDto;
    }

    private List<ItemDto> convertItemEnListToItemDtoList(List<ItemEn> itemEnList) {
        List<ItemDto> itemDtoList = new ArrayList<>();
        for(ItemEn item : itemEnList) {
            boolean breakFlag = false;
            for(ItemDto itemDto : itemDtoList) {
                if(itemDto.getId() == item.getId()) {
                    itemDto.incrementQuantity();
                    breakFlag = true;
                    break;
                }
            }
            if(breakFlag) {
                continue;
            }
            itemDtoList.add(new ItemDto(item.getId(), item.getName(), item.getType(), item.getDescription(), item.getWeight(), item.getPictureUrl()));
        }
        return itemDtoList;
    }
}
