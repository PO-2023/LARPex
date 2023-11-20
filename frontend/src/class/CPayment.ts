import { MakePayment } from "@/gateway/MakePayment.ts";
import { IMakePayment } from "@/gateway/IMakePayment.ts";
import * as z from "zod";
import {DialogType, useDialog} from "@/dispatcher/dialogDispatcher.ts";

export class CPayment {
  private makePaymentGateway: IMakePayment;
  private dispatcher = useDialog().dialogDispatcher;

  constructor() {
    this.makePaymentGateway = new MakePayment();
  }

  async handlePayment(values: any, paymentData: any, setIsLoading: any) {
    setIsLoading(true);
    this.makePayment(paymentData?.paymentId, values.methodType).then((response) => {
      if (response) {
        this.dispatcher(DialogType.SUCCESS_DIALOG);
      } else {
        this.dispatcher(DialogType.ERROR_DIALOG, {
            message: "Niepowodzenie płatności",
        });
      }
    });
  }

  async makePayment(
    paymentId: number | undefined,
    method: string
  ): Promise<boolean> {
    return await this.makePaymentGateway.makePayment(paymentId, method);
  }
}
