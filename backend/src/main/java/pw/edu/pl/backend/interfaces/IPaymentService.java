package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.modelDto.PaymentStatusDto;

public interface IPaymentService {

    public PaymentStatusDto createPaymentRequest(PaymentRequestDto paymentRequestDto);
    public void processPayment(Long paymentId,String method) throws Exception;

}
