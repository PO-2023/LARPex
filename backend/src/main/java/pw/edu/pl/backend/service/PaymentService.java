package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.entity.PaymentEn;
import pw.edu.pl.backend.interfaces.IPaymentService;
import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.modelDto.PaymentStatusDto;
import pw.edu.pl.backend.repository.PaymentRepository;

import java.util.Random;

@Service
public class PaymentService implements IPaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public PaymentStatusDto createPaymentRequest(PaymentRequestDto paymentRequestDto) {

        PaymentEn paymentEn = new PaymentEn();
        paymentEn.setAmmount(0.0);
        paymentEn.setMethod(paymentRequestDto.getPaymentMethod().toUpperCase());
        paymentEn.setStatus("pending");
        paymentEn = paymentRepository.save(paymentEn);

        return new PaymentStatusDto(paymentEn.getId(),paymentEn.getStatus());
    }

    public void processPayment(Integer paymentId) throws Exception {
        PaymentEn paymentEn = paymentRepository.findById(paymentId).orElseThrow(() -> new RuntimeException("Payment not found"));
        // tutaj ma sie odbywac cala logika oplacenia wydarzenia

        String[] possibleStatuses = {"failure", "success"};
        //String randomStatus = possibleStatuses[new Random().nextInt(possibleStatuses.length)];
        if(paymentEn.getMethod().equals("BLIK"))
            paymentEn.setStatus(possibleStatuses[0]);
        else
            paymentEn.setStatus(possibleStatuses[1]);

        paymentRepository.save(paymentEn);
    }
}
