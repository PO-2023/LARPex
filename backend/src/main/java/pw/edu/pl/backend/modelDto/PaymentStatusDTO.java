package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import pw.edu.pl.backend.model.PaymentStatus;

@Data
@AllArgsConstructor
public class PaymentStatusDTO {
    Long id;
    PaymentStatus status;
}
