import { TaxiBookingWhereInput } from "./TaxiBookingWhereInput";
import { TaxiBookingOrderByInput } from "./TaxiBookingOrderByInput";

export type TaxiBookingFindManyArgs = {
  where?: TaxiBookingWhereInput;
  orderBy?: Array<TaxiBookingOrderByInput>;
  skip?: number;
  take?: number;
};
