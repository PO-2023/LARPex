package pw.edu.pl.backend.modelDto;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import pw.edu.pl.backend.entity.GameEn;
import pw.edu.pl.backend.model.Status;

import java.time.LocalDateTime;

@AllArgsConstructor
@Data
public class EventWithGameDto {
    private Long id;
    private String name;
    private Double price;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Status status;
    private GameEn game;
}
