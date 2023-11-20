import EventDescriptionDialog from "@/components/dialogs/EventDescriptionDialog";
import MakePaymentDialog from "@/components/dialogs/MakePaymentDialog";
import SuccessDialog from "@/components/dialogs/SuccessDialog";
import {DialogType, useDialog} from "@/dispatcher/dialogDispatcher";
import ErrorDialog from "@/components/dialogs/ErrorDialog.tsx";


const DialogProvider = () => {

  const {type} = useDialog();

  function renderSwitch(dialogType: DialogType | undefined) {
    switch (dialogType) {
      case DialogType.MAKE_PAYMENT_DIALOG:
        return <MakePaymentDialog/>;
      case DialogType.DESCRIPTION_DIALOG:
        return <EventDescriptionDialog/>;
      case DialogType.SUCCESS_DIALOG:
        return <SuccessDialog/>
      case DialogType.ERROR_DIALOG:
        return <ErrorDialog/>
      default:
        return null;
    }
  }

  return (
      <>
      {renderSwitch(type)}
    </>
  );
};

export default DialogProvider;
