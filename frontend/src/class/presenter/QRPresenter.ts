import {DialogData, DialogType} from "@/dispatcher/dialogDispatcher";

export interface IQRPresenter {
    dispatchMessage(message: string)

    dispatchError(message: string)
}

export class QRPresenter implements IQRPresenter {
    constructor(
        private dialogDispatcher: (type: DialogType, data?: DialogData) => void,
    ) {
    }

    dispatchError(message: string) {
        this.dialogDispatcher(DialogType.ERROR_DIALOG, {
            message: message,
        });
    }

    dispatchMessage(message: string) {
        this.dialogDispatcher(DialogType.SUCCESS_DIALOG, {
            message: message,
        });
    }

}
