import {IInteractWithQR} from "@/usecase/qr/IInteractWithQR";
import {ActionDTO} from "@/class/dto/qr/ActionDTO";

export class QRController {
    constructor(private interactWithQR: IInteractWithQR) {
    }
    isHandled: Boolean = false

    onResult(result: string | undefined) {
        if (this.isHandled) {
            return
        }
        this.isHandled = true
        if (!!result) {
            try {
                const qrData = JSON.parse(result)
                this.interactWithQR.interact(new ActionDTO(qrData.actionType, qrData.itemId, qrData.itemQuantity, 2, qrData.doorId))
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
