import { FlightBookingWhereInput } from "./FlightBookingWhereInput";
import { FlightBookingOrderByInput } from "./FlightBookingOrderByInput";

export type FlightBookingFindManyArgs = {
  where?: FlightBookingWhereInput;
  orderBy?: Array<FlightBookingOrderByInput>;
  skip?: number;
  take?: number;
};
