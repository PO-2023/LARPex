import {DialogData, DialogType} from "@/stores/dialogStore/dialogStore";
import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";

export class EventsPresenter {
    constructor(
        private dialogDispatcher: (type: DialogType, data?: DialogData) => void
    ) {
    }

    dispatchPayment(result: EnrollEventDTO) {
        this.dialogDispatcher(DialogType.MAKE_PAYMENT_DIALOG, {
            paymentData: result,
        });
    }

    dispatchDescription() {
        this.dialogDispatcher(DialogType.DESCRIPTION_DIALOG);
    }
}
