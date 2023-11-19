package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.entity.PaymentEn;
import pw.edu.pl.backend.interfaces.IPaymentService;
import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.modelDto.PaymentStatusDto;
import pw.edu.pl.backend.repository.PaymentRepository;

@Service
public class PaymentService implements IPaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public PaymentStatusDto createPaymentRequest(PaymentRequestDto paymentRequestDto) {
        PaymentEn paymentEn = new PaymentEn();
        paymentEn.setAmmount(0.0);
        paymentEn.setStatus("pending");
        paymentEn = paymentRepository.save(paymentEn);

        return new PaymentStatusDto(paymentEn.getId(),paymentEn.getStatus());
    }

    public void processPayment(Integer paymentId,String method) throws Exception {
        PaymentEn paymentEn = paymentRepository.findById(paymentId).orElseThrow(() -> new RuntimeException("Payment not found"));
        // tutaj ma sie odbywac cala logika oplacenia wydarzenia
//        PaymentEn paymentEn = new PaymentEn();
        paymentEn.setMethod(method.toUpperCase());

        String[] possibleStatuses = {"failure", "success"};

        if(paymentEn.getMethod().equals("BLIK")) {
            paymentEn.setStatus(possibleStatuses[0]);
            paymentRepository.save(paymentEn);
            throw new Exception("BLIK");
        } else {
            paymentEn.setStatus(possibleStatuses[1]);
            paymentRepository.save(paymentEn);
        }
    }
}
