package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class EquipmentDto {
    private Long id;
    private Long playerId;
    private float currentCapacity;
    private float size;
    private List<ItemDto> items;

    public EquipmentDto(Long id, Long playerId, float size, List<ItemDto> items) {
        this.id = id;
        this.playerId = playerId;
        this.size = size;
        this.items = items;
    }
}
