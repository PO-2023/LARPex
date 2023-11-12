package pw.edu.pl.backend.modelDto;

import lombok.Data;

@Data
public class GameDTO {
    private String author;
    private String title;
    private String description;
    private Long id;
    private int playerLimit;

    public GameDTO(String author, String title, String description, Long id, int playerLimit) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.id = id;
        this.playerLimit = playerLimit;
    }
}
