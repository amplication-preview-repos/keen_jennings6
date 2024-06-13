import { Customer } from "../customer/Customer";

export type FlightBooking = {
  arrivalDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  departureDate: Date | null;
  flightNumber: string | null;
  id: string;
  updatedAt: Date;
};
