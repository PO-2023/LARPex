import {DialogData, DialogType} from "@/stores/dialogStore/dialogStore";
import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";
import {EventDTO} from "@/class/dto/EventDTO";

export class EventsPresenter {
    constructor(
        private dialogDispatcher: (type: DialogType, data?: DialogData) => void,
        private events: (event: EventDTO[]) => void,
        private loading: (isLoading: boolean) => void,
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

    setEvents(events: EventDTO[]) {
        this.events(events)
        this.stopLoading()
    }

    startLoading() {
        this.loading(true)
    }

    stopLoading() {
        this.loading(false)
    }
}
