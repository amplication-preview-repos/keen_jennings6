import { Customer } from "../customer/Customer";

export type TaxiBooking = {
  createdAt: Date;
  customer?: Customer | null;
  dropoffLocation: string | null;
  id: string;
  pickupLocation: string | null;
  pickupTime: Date | null;
  updatedAt: Date;
};
