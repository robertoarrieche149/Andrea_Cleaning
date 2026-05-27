export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
}

export interface BookingWizardProps {
  selectedServiceId: string | null;
  onBookingReset?: () => void;
}
