import {DialogData, DialogType} from "@/stores/dialogStore/dialogStore";
import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";

export class EventsPresenter {
    constructor(
        private dialogDispatcher: (type: DialogType, data?: DialogData) => void
    ) {
    }

    dispatchPayment(result: EnrollEventDTO) {
        this.dialogDispatcher("MakePaymentDialog", {
            paymentData: result,
        });
    }

    dispatchDescription() {
        this.dialogDispatcher("DescriptionDialog");
    }
}
