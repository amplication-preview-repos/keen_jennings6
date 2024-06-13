import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HotelBookingModuleBase } from "./base/hotelBooking.module.base";
import { HotelBookingService } from "./hotelBooking.service";
import { HotelBookingController } from "./hotelBooking.controller";
import { HotelBookingResolver } from "./hotelBooking.resolver";

@Module({
  imports: [HotelBookingModuleBase, forwardRef(() => AuthModule)],
  controllers: [HotelBookingController],
  providers: [HotelBookingService, HotelBookingResolver],
  exports: [HotelBookingService],
})
export class HotelBookingModule {}
