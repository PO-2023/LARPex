package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PlayDto {
    private Long id;
    private int currentPlayerCount;
}
