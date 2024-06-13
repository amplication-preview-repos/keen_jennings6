import { HotelBookingWhereInput } from "./HotelBookingWhereInput";
import { HotelBookingOrderByInput } from "./HotelBookingOrderByInput";

export type HotelBookingFindManyArgs = {
  where?: HotelBookingWhereInput;
  orderBy?: Array<HotelBookingOrderByInput>;
  skip?: number;
  take?: number;
};
