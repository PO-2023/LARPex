import {IInteractWithQR} from "@/usecase/qr/IInteractWithQR";
import {ActionDTO} from "@/class/dto/qr/ActionDTO";

export class QRController {
    constructor(private interactWithQR: IInteractWithQR) {
    }

    onResult(result: string | undefined) {
        if (!!result) {
            this.interactWithQR.interact(new ActionDTO(1, 2))
        } else {
            this.interactWithQR.handleError("Błąd zczytywania kodu QR")
        }
    }

    onError(error: string) {
        this.interactWithQR.handleError(error)
    }
}
