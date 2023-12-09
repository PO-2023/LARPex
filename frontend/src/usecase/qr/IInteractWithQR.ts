import {ActionDTO} from "@/class/dto/qr/ActionDTO";
import {IQRPresenter} from "@/class/presenter/QRPresenter";

export interface IInteractWithQR {
    interact(action: ActionDTO)

    handleError(error: String)
}

export class InteractWithQR implements IInteractWithQR {
    constructor(private presenter: IQRPresenter) {
    }

    async interact(action: ActionDTO) {
        this.presenter.dispatchMessage("Testowo jest OK")
        try {
            // TODO wait for backend
            //  mock error/message
        } catch (e) {
        }
    }

    handleError(error: String) {
        this.presenter.dispatchError(error)
    }
}