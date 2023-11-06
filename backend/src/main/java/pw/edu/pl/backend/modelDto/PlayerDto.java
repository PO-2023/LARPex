package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

// @AllArgsConstructor
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
    public PlayerDto(Long id, String name, String surname, String nickname, CharacterDto character, int rank) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
        this.character = character;
        this.rank = rank;
    }

    
}
