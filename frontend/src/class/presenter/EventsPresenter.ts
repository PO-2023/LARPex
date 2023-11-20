import {DialogData, DialogType} from "@/stores/dialogStore/dialogStore";
import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";
import {EventDTO} from "@/class/dto/EventDTO";
import {Dispatch, SetStateAction} from "react";

export interface IEventsPresenter {
    dispatchPayment(result: EnrollEventDTO)

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

    dispatchPayment(result: EnrollEventDTO) {
        this.dialogDispatcher(DialogType.MAKE_PAYMENT_DIALOG, {
            paymentData: result,
        });
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
