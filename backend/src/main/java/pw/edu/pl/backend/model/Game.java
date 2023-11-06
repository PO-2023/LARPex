package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game {
    private Long id;
    private String description;
    private String author;
    private Integer maxPlayers;
    private String estimatedTime;
    private String difficulty;
}
