import { FlightBooking } from "../flightBooking/FlightBooking";
import { HotelBooking } from "../hotelBooking/HotelBooking";
import { TaxiBooking } from "../taxiBooking/TaxiBooking";

export type Customer = {
  createdAt: Date;
  email: string | null;
  flightBookings?: Array<FlightBooking>;
  hotelBookings?: Array<HotelBooking>;
  id: string;
  name: string | null;
  phone: string | null;
  taxiBookings?: Array<TaxiBooking>;
  updatedAt: Date;
};
