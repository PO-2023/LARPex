package pw.edu.pl.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.service.PaymentService;

@RestController
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/processPayment")
    public ResponseEntity<Object> processPayment(@PathVariable String method, @PathVariable Integer paymentId){
        try {
            paymentService.processPayment(paymentId,method);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
}
