package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pw.edu.pl.backend.model.Status;

import java.util.Date;
@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class EventDto {
    private Long id;
    private String name;
    private Double price;
    private Date startTime;
    private Date endTime;
    private Status status;
    private Long gameId;
    private int players;

    public EventDto(Long id, String name, Double price, Date startTime, Date endTime, Status status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }
}
