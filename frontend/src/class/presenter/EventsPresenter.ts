import {DialogData, DialogType} from "@/stores/dialogStore/dialogStore";
import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";
import {EventDTO} from "@/class/dto/EventDTO";
import {Dispatch, SetStateAction} from "react";

export interface IEventsPresenter {
    dispatchPayment(result: EnrollEventDTO | undefined)

    dispatchDescription()

    setEvents(events: EventDTO[])

    stopLoading()

    startLoading()
}

export class EventsPresenter implements IEventsPresenter {
    constructor(
        private dialogDispatcher: (type: DialogType, data?: DialogData) => void,
        private events: Dispatch<SetStateAction<EventDTO[]>>,
        private loading: (isLoading: boolean) => void
    ) {
    }

    dispatchPayment(result: EnrollEventDTO | undefined) {
        if (result) {
            this.dialogDispatcher(DialogType.MAKE_PAYMENT_DIALOG, {
                paymentData: result,
            });
        } else {
            this.dialogDispatcher(DialogType.ERROR_DIALOG, {
                message: "Błąd zapisu"
            });
        }
    }

    dispatchDescription() {
        this.dialogDispatcher(DialogType.DESCRIPTION_DIALOG);
    }

    setEvents(events: EventDTO[]) {
        this.events(events);
    }

    startLoading() {
        this.loading(true);
    }

    stopLoading() {
        this.loading(false);
    }
}
