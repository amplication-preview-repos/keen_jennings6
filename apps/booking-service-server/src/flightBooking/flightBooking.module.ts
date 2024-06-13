import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FlightBookingModuleBase } from "./base/flightBooking.module.base";
import { FlightBookingService } from "./flightBooking.service";
import { FlightBookingController } from "./flightBooking.controller";
import { FlightBookingResolver } from "./flightBooking.resolver";

@Module({
  imports: [FlightBookingModuleBase, forwardRef(() => AuthModule)],
  controllers: [FlightBookingController],
  providers: [FlightBookingService, FlightBookingResolver],
  exports: [FlightBookingService],
})
export class FlightBookingModule {}
