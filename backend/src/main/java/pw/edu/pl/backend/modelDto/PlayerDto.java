package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class PlayerDto {
    private Long id;
    private String name;
    private String surname;
    private String nickname;
    private CharacterDto character;
    private int rank;    
}
