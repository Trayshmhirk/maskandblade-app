export interface Appointment {
  id: string;
  visitorName: string;
  purpose: string;
  host: string;
  time: string;
  date: Date;
  notes?: string;
  email: string;
  phone: string;
}
