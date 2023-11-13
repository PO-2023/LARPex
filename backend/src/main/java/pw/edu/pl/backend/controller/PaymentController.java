package pw.edu.pl.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.service.EventService;
import pw.edu.pl.backend.service.PaymentService;

import java.util.List;

@RestController
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/processPayment")
    public void processPayment(Integer paymentId){
        paymentService.processPayment(paymentId);
    }

    @GetMapping("/createPaymentRequest")
    public void processPayment(PaymentRequestDto paymentRequestDto){
        paymentService.createPaymentRequest(paymentRequestDto);
    }
}
