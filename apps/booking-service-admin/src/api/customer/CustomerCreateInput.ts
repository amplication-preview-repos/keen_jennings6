import { FlightBookingCreateNestedManyWithoutCustomersInput } from "./FlightBookingCreateNestedManyWithoutCustomersInput";
import { HotelBookingCreateNestedManyWithoutCustomersInput } from "./HotelBookingCreateNestedManyWithoutCustomersInput";
import { TaxiBookingCreateNestedManyWithoutCustomersInput } from "./TaxiBookingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  flightBookings?: FlightBookingCreateNestedManyWithoutCustomersInput;
  hotelBookings?: HotelBookingCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  taxiBookings?: TaxiBookingCreateNestedManyWithoutCustomersInput;
};
