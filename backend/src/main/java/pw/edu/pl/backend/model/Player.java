package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class Player {
    private Long id;
    private String name;
    private String surname;
    private String nickname;
    private Character character;
    private int rank;
}
