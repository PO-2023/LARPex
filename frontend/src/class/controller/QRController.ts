import {IQRPresenter} from "@/class/presenter/QRPresenter";
import {IInteractWithQR} from "@/usecase/qr/IInteractWithQR";
import {ActionDTO} from "@/class/dto/qr/ActionDTO";

export class QRController {
    constructor(private interactWithQR: IInteractWithQR, private presenter: IQRPresenter) {
    }

    onResult(result: string | undefined) {
        if (!!result) {
            this.interactWithQR.interact(new ActionDTO(1, 2))
        } else {
            this.presenter.dispatchError("Błąd zczytywania kodu QR")
        }
    }

    onError(error: string) {
        this.presenter.dispatchError(error)
    }
}
