package pw.edu.pl.backend.modelDto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder(toBuilder = true)
public class GameDto {
    private String author;
    private String title;
    private Long id;
    private int playerLimit;

}
