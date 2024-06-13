import { FlightBookingUpdateManyWithoutCustomersInput } from "./FlightBookingUpdateManyWithoutCustomersInput";
import { HotelBookingUpdateManyWithoutCustomersInput } from "./HotelBookingUpdateManyWithoutCustomersInput";
import { TaxiBookingUpdateManyWithoutCustomersInput } from "./TaxiBookingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  flightBookings?: FlightBookingUpdateManyWithoutCustomersInput;
  hotelBookings?: HotelBookingUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  taxiBookings?: TaxiBookingUpdateManyWithoutCustomersInput;
};
