package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pw.edu.pl.backend.model.Status;

import java.time.LocalDateTime;
import java.util.Date;
@Data
public class EventDto {
    private Long id;
    private String name;
    private Double price;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Status status;
    private Long gameId;
    private int players;

    public EventDto(Long id, String name, Double price, LocalDateTime startTime, LocalDateTime endTime, Status status, Long gameId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.gameId = gameId;
    }
}
