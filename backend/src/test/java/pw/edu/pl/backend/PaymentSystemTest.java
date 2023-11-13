package pw.edu.pl.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;
import pw.edu.pl.backend.entity.*;
import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.repository.*;
import pw.edu.pl.backend.service.PaymentService;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class PaymentSystemTest {

    @Autowired
    PaymentService paymentService;
//    @Test
//    void getAllEvents() {
//        var r = paymentService.createPaymentRequest(new PaymentRequestDto("blik"));
//        assertEquals(3, r);
//    }
}
