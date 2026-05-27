import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BookingWizardProps, FormData } from "../types/booking";

import BookingCalendar from "./wizard/BookingCalendar";
import BookingFormDetails from "./wizard/BookingFormDetails";
import BookingSuccess from "./wizard/BookingSuccess";

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  apt: "",
  city: "Atlanta",
  state: "GA",
  zip: ""
};

export default function BookingWizard({ selectedServiceId, onBookingReset }: BookingWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time if date is changed
  };

  const handleTimeSelect = (timeStr: string) => {
    setSelectedTime(timeStr);
    setStep(2); // Auto-advance to Step 2
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullAddress = `${formData.address}${formData.apt ? `, Apt ${formData.apt}` : ""}, ${formData.city}, ${formData.state} ${formData.zip}, USA`;
    
    // Create the exact templateParams requested in specs
    const templateParams = {
      client_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone,
      client_address: fullAddress,
      booking_date: formattedSelectedDate,
      booking_time: selectedTime || "",
      special_comments: (formData as any).comments || "Ninguno",
      selected_service: selectedServiceId 
        ? `${selectedServiceId.charAt(0).toUpperCase() + selectedServiceId.slice(1)} Cleaning` 
        : "Evaluación General"
    };

    try {
      // Send message via emailjs (dynamic from environment variables with fallback)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'correo_cleaning', 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xd8fy1a', 
        templateParams, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'BoBMJpStFqB-gba8k'
      );
      setStep(3); // Advance to success screen
    } catch (error) {
      console.error("Booking transmission error via EmailJS:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAll = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData(initialFormData);
    if (onBookingReset) {
      onBookingReset();
    }
  };

  const formattedSelectedDate = selectedDate ? selectedDate.toLocaleDateString("en-US", {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }) : "";

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 min-h-[500px] flex flex-col">
      {/* Steps Indicator Progress Bar */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-4.5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= 1 ? "bg-brand-500 text-white shadow-md shadow-brand-500/10" : "bg-slate-200 text-slate-500"
            }`}>
              1
            </span>
            <span className={`text-xs font-bold ${step >= 1 ? "text-slate-800" : "text-slate-400"}`}>
              Schedule
            </span>
          </div>

          <div className={`h-0.5 flex-1 mx-3 transition-colors duration-300 ${step >= 2 ? "bg-brand-500" : "bg-slate-200"}`} />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= 2 ? "bg-brand-500 text-white shadow-md" : "bg-slate-200 text-slate-500"
            }`}>
              2
            </span>
            <span className={`text-xs font-bold ${step >= 2 ? "text-slate-800" : "text-slate-400"}`}>
              Your Details
            </span>
          </div>

          <div className={`h-0.5 flex-1 mx-3 transition-colors duration-300 ${step >= 3 ? "bg-brand-500" : "bg-slate-200"}`} />

          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step === 3 ? "bg-emerald-500 text-white shadow-md" : "bg-slate-200 text-slate-500"
            }`}>
              3
            </span>
            <span className={`text-xs font-bold ${step === 3 ? "text-slate-800" : "text-slate-400"}`}>
              Finished
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic step rendering panel */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col">
        {step === 1 && (
          <BookingCalendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
            selectedServiceId={selectedServiceId}
          />
        )}

        {step === 2 && (
          <BookingFormDetails
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleBookingSubmit}
            onBack={() => setStep(1)}
            isSubmitting={isSubmitting}
            formattedSelectedDate={formattedSelectedDate}
            selectedTime={selectedTime || ""}
            selectedServiceId={selectedServiceId}
          />
        )}

        {step === 3 && (
          <BookingSuccess
            formData={formData}
            formattedSelectedDate={formattedSelectedDate}
            selectedTime={selectedTime || ""}
            onReset={handleResetAll}
          />
        )}
      </div>
    </div>
  );
}
