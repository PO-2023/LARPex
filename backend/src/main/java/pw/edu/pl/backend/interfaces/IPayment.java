package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.PaymentRequestDTO;
import pw.edu.pl.backend.modelDto.PaymentStatusDTO;

public interface IPayment {
    PaymentStatusDTO createPaymentRequest(PaymentRequestDTO paymentRequestDTO);

    void processPayment(Long payment);
}
