import EventDescriptionDialog from "@/components/dialogs/EventDescriptionDialog";
import MakePaymentDialog from "@/components/dialogs/MakePaymentDialog";
import SuccessDialog from "@/components/dialogs/SuccessDialog";
import { useDialog } from "@/stores/dialogStore/dialogStore";


const DialogProvider = () => {

  const { type } = useDialog();

  function renderSwitch(dialogType: string | undefined) {
    switch(dialogType) {
      case 'MakePaymentDialog':
        return <MakePaymentDialog />;
      case 'DescriptionDialog':
        return <EventDescriptionDialog />;
      case 'SuccessDialog':
        return <SuccessDialog/>
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
