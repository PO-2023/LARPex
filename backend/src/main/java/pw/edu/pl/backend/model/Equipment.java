package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pw.edu.pl.backend.modelDto.ItemDto;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipment {
    private Long id;
    private Long playerId;
    private float currentCapacity;
    private float size;
    private List<ItemDto> items;

    public Equipment(Long id, Long playerId, float size, List<ItemDto> items) {
        this.id = id;
        this.playerId = playerId;
        this.size = size;
        this.items = items;
    }
}