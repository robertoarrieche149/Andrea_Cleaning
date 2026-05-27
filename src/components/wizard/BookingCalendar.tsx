import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, Info } from "lucide-react";

interface BookingCalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  selectedTime: string | null;
  onTimeSelect: (timeStr: string) => void;
  selectedServiceId: string | null;
}

export default function BookingCalendar({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect,
  selectedServiceId
}: BookingCalendarProps) {
  // Calendar state for browsing months
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Available Time Slots from 09:00 AM to 05:00 PM (hourly blocks)
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ];

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const maxDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30); // Limit maximum booking window to exactly 30 days
    d.setHours(23, 59, 59, 999);
    return d;
  }, []);

  // Check if a date is disabled (past dates, past 30 days, weekends)
  const isDateDisabled = (date: Date): boolean => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    // Rule 1: No past dates
    if (normalizedDate < today) return true;

    // Rule 2: 30 days limit
    if (normalizedDate > maxDate) return true;

    // Rule 3: Weekends blocked (Saturday = 6, Sunday = 0)
    const dayOfWeek = normalizedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;

    return false;
  };

  const weekdayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Generate days in the currently viewed month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const days: (Date | null)[] = [];
    
    // Pad initial empty slots
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    
    // Add monthly days
    for (let d = 1; d <= totalDays; d++) {
      days.push(new Date(year, month, d));
    }
    
    return days;
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold tracking-wider text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded-sm">
          Step 1 of 3
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-2">
          Choose Date & Preferred Hour
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Las fechas pasadas, fines de semana y reservas más allá de 30 días están bloqueadas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start my-4">
        {/* Calendar Grid */}
        <div className="bg-slate-50/80 border border-slate-200/60 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display font-extrabold text-slate-800 capitalize text-sm sm:text-base">
              {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h4>
            <div className="flex items-center gap-1">
              <button 
                onClick={handlePrevMonth}
                type="button"
                className="p-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition shadow-xs text-slate-650 cursor-pointer"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              <button 
                onClick={handleNextMonth}
                type="button"
                className="p-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition shadow-xs text-slate-650 cursor-pointer"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Weekday Titles */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {weekdayNames.map((name) => (
              <div key={name} className="text-[11px] font-bold text-slate-400 py-1 uppercase">
                {name}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {calendarDays.map((dateVal, index) => {
              if (dateVal === null) return <div key={`empty-${index}`} />;
              
              const isDisabled = isDateDisabled(dateVal);
              const isSelected = selectedDate?.toDateString() === dateVal.toDateString();
              const isToday = dateVal.toDateString() === today.toDateString();

              return (
                <button
                  key={`day-${index}`}
                  disabled={isDisabled}
                  onClick={() => onDateSelect(dateVal)}
                  type="button"
                  className={`py-2 rounded-xl text-xs font-bold tracking-tight transition-all relative cursor-pointer ${
                    isDisabled 
                      ? "text-slate-300 bg-transparent opacity-40 cursor-not-allowed" 
                      : isSelected
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-103"
                      : "bg-white border border-slate-200 text-slate-800 hover:bg-brand-50 hover:text-brand-750 hover:border-brand-200"
                  }`}
                >
                  {dateVal.getDate()}
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-slate-500 justify-center">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-white border border-slate-200 inline-block" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-brand-500 inline-block" />
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 opacity-40 inline-block" />
              <span>Closed</span>
            </div>
          </div>
        </div>

        {/* Hourly Blocks Panel */}
        <div className="space-y-4">
          <div className="bg-brand-50 border border-brand-100/50 rounded-xl p-4 flex gap-3 text-brand-900">
            <Info className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold">Estimación de Duración de Visita:</span> Esta es una cita de 60 minutos para que Andrea visite tu domicilio, evalúe el trabajo y te entregue una cotización técnica personalizada sin compromiso.
            </div>
          </div>

          <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-2">
            <Clock className="h-4.5 w-4.5 text-brand-500" />
            <span>Horarios Disponibles (Bloques de 60 min):</span>
          </h4>

          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2.5" id="time-slots-container">
              {timeSlots.map((timeStr) => {
                const isSelectedTime = selectedTime === timeStr;
                return (
                  <button
                    key={timeStr}
                    onClick={() => onTimeSelect(timeStr)}
                    type="button"
                    className={`py-2.5 px-1 text-xs sm:text-sm font-bold font-mono rounded-lg transition-all border cursor-pointer ${
                      isSelectedTime
                        ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                        : "bg-white hover:bg-brand-50 text-slate-800 border-slate-200 hover:border-brand-300"
                    }`}
                  >
                    {timeStr}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-slate-250 rounded-2xl p-8 text-center text-slate-400 text-xs sm:text-sm">
              Selecciona una fecha disponible en el calendario para ver los horarios.
            </div>
          )}
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
        <span>Servicio seleccionado: {selectedServiceId ? <strong className="text-slate-650 underline capitalize">{selectedServiceId} Cleaning</strong> : "Evaluación General"}</span>
      </div>
    </div>
  );
}
