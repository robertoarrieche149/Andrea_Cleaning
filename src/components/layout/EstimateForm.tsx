import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Phone, Mail, MapPin, ClipboardList, Clock, Sparkles } from "lucide-react";

interface EstimateFormData {
  client_name: string;
  client_phone: string;
  client_email: string;
  service_area: string;
  service_type: string;
  frequency: string;
  booking_date: string;
  booking_time: string;
  special_comments: string;
}

const initialFormState: EstimateFormData = {
  client_name: "",
  client_phone: "",
  client_email: "",
  service_area: "",
  service_type: "Regular",
  frequency: "One-Time",
  booking_date: "",
  booking_time: "",
  special_comments: ""
};

export default function EstimateForm() {
  const [formData, setFormData] = useState<EstimateFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const minDate = getFormattedDate(new Date());
  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 2);
  const maxDate = getFormattedDate(maxDateObj);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "booking_date" && value) {
      const selectedDate = new Date(value + "T12:00:00"); // Use noon to avoid timezone shift
      if (selectedDate.getDay() === 0) {
        alert("Los domingos trabajamos bajo cita previa especial. Por favor elige otro día o contáctanos por teléfono.");
        return;
      }
    }

    if (name === "booking_time" && value) {
      const [hoursStr, minutesStr] = value.split(':');
      const hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      if (hours < 8 || hours > 18 || (hours === 18 && minutes > 0)) {
        alert("Nuestro horario de atención es de 8:00 AM a 6:00 PM. Para horarios especiales contáctenos.");
        return;
      }
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // EmailJS credentials from environment variables or pre-configured fallbacks
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "correo_cleaning";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "BoBMJpStFqB-gba8k";

    // We will use two separate template IDs. Fallback to same default template if not specified, 
    // but code allows using separate templates for client confirmation and admin lead.
    const clientTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xd8fy1a";
    const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID || "template_admin_lead";

    // Format the date beautifully for the email
    const formattedDate = new Date(formData.booking_date + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    // Flow A: Client Confirmation template parameters
    const clientParams = {
      to_email: formData.client_email,
      client_name: formData.client_name,
      booking_date: formattedDate,
      booking_time: formData.booking_time,
      service_type: formData.service_type,
      service_area: formData.service_area,
      special_comments: formData.special_comments || "None",
      subject: "Your Free Estimate Request with Andreas Cleaning LLC",
      // Custom body formatted as requested by specs
      message_body: `Hi ${formData.client_name}, thank you for reaching out! We have received your request for a free estimate on ${formattedDate} at ${formData.booking_time} for our ${formData.service_type} service in ${formData.service_area}. Optional description provided: '${formData.special_comments || "None"}'. We will contact you shortly via phone to confirm details.`
    };

    // Flow B: Admin (Isabel) Lead Alert template parameters
    const adminParams = {
      to_email: "Aesg1414@Gmail.com", // Isabel's administrative email
      client_name: formData.client_name,
      client_phone: formData.client_phone,
      client_email: formData.client_email,
      booking_date: formattedDate,
      booking_time: formData.booking_time,
      service_type: formData.service_type,
      frequency: formData.frequency,
      service_area: formData.service_area,
      special_comments: formData.special_comments || "None",
      subject: `🚨 NEW LEAD: Free Estimate Request - ${formData.service_area}`,
      // Custom body formatted as requested by specs
      message_body: `Detalles del Cliente:
Nombre: ${formData.client_name}
Teléfono: ${formData.client_phone}
Ubicación: ${formData.service_area}

Detalles de la Cita:
Servicio: ${formData.service_type} (${formData.frequency})
Fecha/Hora sugerida: ${formattedDate} a las ${formData.booking_time}
Notas del cliente: ${formData.special_comments || "None"}

Acción: Ponerse en contacto con el cliente para cerrar la cita.`
    };

    try {
      // Execute both EmailJS requests concurrently
      await Promise.all([
        emailjs.send(serviceId, clientTemplateId, clientParams, publicKey),
        emailjs.send(serviceId, adminTemplateId, adminParams, publicKey).catch(err => {
          // If admin template is not configured, we log it but don't fail the whole process
          console.warn("Admin Lead Notification Template not found or failed, standard template was used.", err);
          // Fallback to sending it to standard template as well
          return emailjs.send(serviceId, clientTemplateId, { ...adminParams, to_email: "Aesg1414@Gmail.com" }, publicKey);
        })
      ]);

      setSubmitStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error sending estimate requests via EmailJS:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-20" id="estimate-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            Quick Booking
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            Schedule your appointment for a free estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Fill out the form below. We will immediately confirm your request via email and contact you by phone shortly to finalize detail arrangements.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl relative overflow-hidden">
          {/* Ambient accent background glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-5"
                key="success-message"
              >
                <div className="inline-flex items-center justify-center p-4 bg-emerald-100 text-emerald-600 rounded-full border border-emerald-200">
                  <Sparkles className="h-10 w-10 text-emerald-500 animate-pulse" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-emerald-700">
                  ¡Solicitud Enviada con Éxito!
                </h3>
                <p className="text-slate-650 max-w-md mx-auto text-sm leading-relaxed">
                  ¡Gracias! Hemos enviado una confirmación a tu correo.
                  El equipo de limpieza de Isabel revisará los detalles y te llamaremos en breve para confirmar la cita.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md text-xs cursor-pointer"
                >
                  Enviar Nueva Solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" key="estimate-form">

                {submitStatus === "error" && (
                  <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 text-rose-800 text-xs sm:text-sm font-medium">
                    <p className="text-sm font-medium mt-1">
                      ⚠ There was an error submitting your request. Please check your network and try again, or call us directly at +1 (938) 247-2787.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-brand-primary" />
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="client_name"
                      required
                      placeholder="John Doe"
                      value={formData.client_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-brand-primary" />
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="client_phone"
                      required
                      placeholder="+1 (123) 123-1234"
                      value={formData.client_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-brand-primary" />
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="client_email"
                      required
                      placeholder="johndoe@example.com"
                      value={formData.client_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50"
                    />
                  </div>

                  {/* Service Area */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                      Service Area <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="service_area"
                      required
                      value={formData.service_area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-800"
                    >
                      <option value="">Select Service Area</option>
                      <option value="Madison">Madison</option>
                      <option value="Huntsville">Huntsville</option>
                      <option value="Hampton Cove">Hampton Cove</option>
                      <option value="New Market">New Market</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ClipboardList className="h-3.5 w-3.5 text-brand-primary" />
                      Service Type
                    </label>
                    <select
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-800"
                    >
                      <option value="Regular">Regular Cleaning</option>
                      <option value="Deep">Deep Cleaning</option>
                      <option value="Move In-Out">Move In / Out</option>
                      <option value="Post-Construction">Post-Construction</option>
                      <option value="Office">Office Cleaning</option>
                      <option value="Special Event">Special Event</option>
                    </select>
                  </div>

                  {/* Frequency */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand-primary" />
                      Frequency
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-800"
                    >
                      <option value="Weekly">Weekly (Save 15%)</option>
                      <option value="Bi-Weekly">Bi-Weekly (Save 10%)</option>
                      <option value="Monthly">Monthly (Save 5%)</option>
                      <option value="One-Time">One-Time Service</option>
                    </select>
                  </div>

                  {/* Date selection */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand-primary" />
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="booking_date"
                      required
                      min={minDate}
                      max={maxDate}
                      value={formData.booking_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-700"
                    />
                  </div>

                  {/* Time selection */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-primary" />
                      Preferred Time <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="booking_time"
                      required
                      min="08:00"
                      max="18:00"
                      value={formData.booking_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-700"
                    />
                  </div>

                </div>

                {/* Additional Notes */}
                <div className="text-left">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Additional Notes (Optional description)
                  </label>
                  <textarea
                    name="special_comments"
                    rows={4}
                    placeholder="Tell us about special needs, room sizes, pets, focus areas, or entry details..."
                    value={formData.special_comments}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary bg-slate-50/50 text-slate-700"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-primary hover:bg-brand-600 disabled:bg-slate-300 text-white font-bold rounded-2xl shadow-lg transition-all duration-200 text-base cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 text-brand-secondary fill-brand-secondary/20" />
                        Submit Estimate Request
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
