import { DateRange } from "react-day-picker";
import { events } from "@/mock/eventList";
import {PaymentStatus} from "@/class/PaymentStatus.ts";
import {MakePayment} from "@/gateway/MakePayment.ts";
import {IMakePayment} from "@/gateway/IMakePayment.ts";

export class CPayment {

  private makePaymentGateway: IMakePayment

  constructor() {
    this.makePaymentGateway = new MakePayment();
  }

  async makePayment(paymentId: number | undefined, method: string): Promise<boolean> {
     return await this.makePaymentGateway.makePayment(paymentId, method);
  }
}