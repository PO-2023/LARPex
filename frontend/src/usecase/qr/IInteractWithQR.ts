import {ActionDTO} from "@/class/dto/qr/ActionDTO";
import {IQRPresenter} from "@/class/presenter/QRPresenter";
import axios from "axios";

export interface IInteractWithQR {
    interact(action: ActionDTO)

    handleError(error: String)
}

export class InteractWithQR implements IInteractWithQR {
    constructor(private presenter: IQRPresenter) {
    }

    async interact(action: ActionDTO) {
        try {
            const {data: result} = await axios.post(
                `http://localhost:8080/action`,
                action,
            );
            this.presenter.dispatchMessage(result.message)
        } catch (e) {
            this.presenter.dispatchMessage("Błąd dodawania przedmiotu")
        }
    }

    handleError(error: String) {
        this.presenter.dispatchError(error)
    }
}