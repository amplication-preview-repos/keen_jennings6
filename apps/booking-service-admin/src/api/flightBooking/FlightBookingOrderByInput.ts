import { SortOrder } from "../../util/SortOrder";

export type FlightBookingOrderByInput = {
  arrivalDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  departureDate?: SortOrder;
  flightNumber?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
