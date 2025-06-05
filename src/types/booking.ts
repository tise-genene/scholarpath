export interface BookingData {
  name: string;
  email: string;
  date: string;
  message: string;
  package: string;
  packageDetails: {
    id: string;
    name: string;
    duration: string;
    price: number;
    features: string[];
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  message: string;
}
