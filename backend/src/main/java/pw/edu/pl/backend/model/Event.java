package pw.edu.pl.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event {

    private Long id;
    private String name;
    private Double price;
    private Date startTime;
    private Date endTime;
    private Status status;
    private Long gameId;

}
