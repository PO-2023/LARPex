import {IMakePayment} from "@/gateway/IMakePayment.ts";
import {PaymentStatus} from "@/class/PaymentStatus.ts";

export class MakePayment implements IMakePayment {
    makePayment(paymentId: number, method: string): Promise<boolean> {
        return fetch(`http://localhost:8080/processPayment/${paymentId}/${method}`)
            .then(resp => {
                return resp.status == 200
            });
    }

}