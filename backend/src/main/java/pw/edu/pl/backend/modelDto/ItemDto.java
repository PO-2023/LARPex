package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.beans.ConstructorProperties;

@Data
@AllArgsConstructor
public class ItemDto {
    private Long id;
    private String name;
    private String type;
    private String description;
    private int quantity;
    private float weight;
    private String pictureUrl;

    public ItemDto(Long id, String name, String type, String description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.quantity = 1;
    }
}
