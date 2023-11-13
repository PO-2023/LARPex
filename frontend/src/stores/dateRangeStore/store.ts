import { create } from "zustand";
import { DateRange } from "react-day-picker";

type Store = {
  dateRange: DateRange | undefined;
  setDateRange: (dateRange: DateRange | undefined) => void;
};

export const useDateRange = create<Store>()((set) => ({
  dateRange: undefined,
  setDateRange: (dateRange) => set(() => ({ dateRange })),
}));
