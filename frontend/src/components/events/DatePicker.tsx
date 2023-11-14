import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { pl } from "date-fns/locale";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDateRange } from "@/stores/dateRangeStore/store";

const DatePicker = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const { dateRange, setDateRange } = useDateRange();

  return (
    <div className={cn("gap-2 grid", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "sm:w-[300px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-0 sm:mr-2 h-4 w-4" />
            <div className="hidden sm:block">
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y", { locale: pl })} -{" "}
                    {format(dateRange.to, "LLL dd, y", { locale: pl })}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y", { locale: pl })
                )
              ) : (
                <span className="hidden sm:block">Wybierz zakres</span>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            locale={pl}
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(value) => {
              setDateRange(value);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
