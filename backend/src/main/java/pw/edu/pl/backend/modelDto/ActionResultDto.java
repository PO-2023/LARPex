package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ActionResultDto {
    private String message;

    private String status;
}
