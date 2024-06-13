import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FlightBookingUpdateInput = {
  arrivalDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  departureDate?: Date | null;
  flightNumber?: string | null;
};
