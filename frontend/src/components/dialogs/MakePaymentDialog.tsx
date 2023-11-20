import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {DialogType, useDialog} from "@/dispatcher/dialogDispatcher";
import {useSelectedEvent} from "@/stores/selectedItemStore/selectedItemStore";
import {Button} from "../ui/button";
import {Form, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";

import {useState} from "react";
import {BadgeDollarSign, Loader2} from "lucide-react";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import PaymentTypeDropdown from "../events/PaymentTypeDropdown";
import {CPayment} from "@/class/CPayment.ts";

const formSchema = z.object({
  methodType: z.string().min(1, "Musisz wybrać metodę płatności!"),
});

const MakePaymentDialog = () => {

  const cPayment = new CPayment();
  const {closeDialog, dialogDispatcher, data} = useDialog();
  const {selectedEvent} = useSelectedEvent();

  const paymentData = data?.paymentData;

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      methodType: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await cPayment.handlePayment(data, paymentData, setIsLoading);
  }

  if (!selectedEvent) return;

  return (
      <Dialog open={true} onOpenChange={closeDialog}>
        <DialogContent className="min-h-[17rem] max-w-[25rem] ">
          <DialogHeader>
            <DialogTitle>
            <span className="font-bold text-indigo-500 text-xl">
              Płatność 🛒
            </span>
            </DialogTitle>
          </DialogHeader>
          <section className="flex flex-col justify-between mt-2">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <section className="flex flex-col text-sm">
                <div className="mb-3">
                  Kwota do zapłaty:
                  <div className="text-indigo-500 font-bold text-xl">
                    {paymentData?.price}.00 zł
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="methodType"
                  render={({ field }) => (
                    <FormItem className="min-h-[8rem]">
                      <FormLabel>Metoda płatności:</FormLabel>
                      <PaymentTypeDropdown field={field} />
                      <FormDescription>
                        Wybierz metodę płatności
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <section className="flex gap-3">
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
                >
                  {!isLoading && <BadgeDollarSign size={20} />}
                  {isLoading && (
                    <Loader2
                      size={20}
                      className="animate-spin transition-all"
                    />
                  )}
                  Zapłać
                </Button>
                <Button
                  variant="ghost"
                  className="w-32 flex gap-1"
                  onClick={closeDialog}
                >
                  Anuluj
                </Button>
              </section>
            </form>
          </Form>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default MakePaymentDialog;
