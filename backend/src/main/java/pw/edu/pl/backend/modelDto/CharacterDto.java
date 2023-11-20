package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CharacterDto {
    private Long id;
    private Long gameId;
    private String name;
    private String description;
}
