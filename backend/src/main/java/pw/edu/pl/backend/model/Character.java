package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Character {
    private Long id;
    private Long gameId;
    private String name;
    private String description;
}
