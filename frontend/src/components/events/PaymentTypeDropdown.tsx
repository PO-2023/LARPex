import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Landmark } from "lucide-react";
import { FC } from "react";
import { FormControl } from "../ui/form";
import { ControllerRenderProps } from "react-hook-form";

interface PaymentTypeDropdownType {
  field: ControllerRenderProps<
    {
      methodType: string;
    },
    "methodType"
  >;
}

const PaymentTypeDropdown: FC<PaymentTypeDropdownType> = ({ field }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="bank">
          <div className="flex gap-2 items-center">
            <Landmark size={18} />
            <div>Przelew</div>
          </div>
        </SelectItem>
        <SelectItem value="blik">
          <div className="flex gap-2 items-center">
            <img src="src/assets/blik.jpeg" width={18} height={18} />
            <div>Blik</div>
          </div>
        </SelectItem>
        <SelectItem value="card">
          <div className="flex gap-2 items-center">
            <CreditCard size={18} />
            <div>Karta</div>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PaymentTypeDropdown;
