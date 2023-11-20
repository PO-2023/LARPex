package pw.edu.pl.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.interfaces.IPaymentService;
import pw.edu.pl.backend.service.PaymentService;

import java.util.ArrayList;

@RestController
@AllArgsConstructor
public class PaymentController {

    private final IPaymentService paymentService;

    @GetMapping("/processPayment/{paymentId}/{method}")
    public ResponseEntity<String> processPayment(@PathVariable String method, @PathVariable Long paymentId){
        try {
            paymentService.processPayment(paymentId,method);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Failure");
        }
        return ResponseEntity.ok().body("Success");
    }
}
