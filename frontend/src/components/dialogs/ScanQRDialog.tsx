import {Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";
import {useDialog} from "@/dispatcher/dialogDispatcher";
import {IQRPresenter, QRPresenter} from "@/class/presenter/QRPresenter";
import {IInteractWithQR, InteractWithQR} from "@/usecase/qr/IInteractWithQR";
import {QRController} from "@/class/controller/QRController";
import {QrReader} from 'react-qr-reader';

const ScanQRDialog = () => {
    const {dialogDispatcher, closeDialog} = useDialog();

    const presenter: IQRPresenter = new QRPresenter(dialogDispatcher)
    const interactWithQR: IInteractWithQR = new InteractWithQR(presenter)
    const controller = new QRController(interactWithQR)

    return (
        <Dialog open={true} onOpenChange={closeDialog}>
            <DialogContent className="min-h-[20rem] max-w-[19rem] flex flex-col">
                <DialogHeader></DialogHeader>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            controller.onResult(result?.text)
                        }

                        if (!!error && JSON.stringify(error) != JSON.stringify({})) {
                            controller.onError(error)
                        }
                    }}
                    style={{width: '100%'}}
                />
            </DialogContent>
        </Dialog>
    );
};

export default ScanQRDialog;
