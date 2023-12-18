import {IInteractWithQR} from "@/usecase/qr/IInteractWithQR";
import {ActionDTO} from "@/class/dto/qr/ActionDTO";

export class QRController {
    constructor(private interactWithQR: IInteractWithQR) {
    }

    onResult(result: string | undefined) {
        if (!!result) {
            try {
                const qrData = JSON.parse(result)
                this.interactWithQR.interact(new ActionDTO(qrData.actionType, qrData.itemId, qrData.itemQuantity, 1))
            } catch (e) {
                this.interactWithQR.handleError("Błąd zczytywania kodu QR")
            }
        } else {
            this.interactWithQR.handleError("Błąd zczytywania kodu QR")
        }
    }

    onError(error: string) {
        this.interactWithQR.handleError(error)
    }
}
