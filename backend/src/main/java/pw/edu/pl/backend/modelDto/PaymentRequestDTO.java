package pw.edu.pl.backend.modelDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PaymentRequestDTO {
    private Long eventId;
    private Long userId;
    private String paymentMethod;
}
