package pw.edu.pl.backend.service;

import pw.edu.pl.backend.interfaces.IPayment;
import pw.edu.pl.backend.model.PaymentStatus;
import pw.edu.pl.backend.modelDto.PaymentRequestDTO;
import pw.edu.pl.backend.modelDto.PaymentStatusDTO;

public class PaymentService implements IPayment {
    @Override
    public PaymentStatusDTO createPaymentRequest(PaymentRequestDTO paymentRequestDTO) {
        //TODO: Remove hardcode and add JPA call for creating payment request
        return new PaymentStatusDTO(1L, PaymentStatus.PENDING);
    }

    @Override
    public void processPayment(Long id) {

    }

}
