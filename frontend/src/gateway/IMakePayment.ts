import {PaymentStatus} from "@/class/PaymentStatus.ts";

export interface IMakePayment {
    makePayment(paymentId: number | undefined, method: string): Promise<boolean>;
}