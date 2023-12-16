package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    private Long id;
    private Long userId;
    private String name;
    private String surname;
    private String nickname;
    private Long characterId;
    private Long equipmentId;
    private Long playId;
    private int rank;
}
