package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ActionDto {
    private ActionType actionType;
    private Long itemId;
    private Long itemQuantity;
    private Long playerId;
}
