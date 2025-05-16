export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  location: string;
  serviceId: string;
  notes?: string;
}
