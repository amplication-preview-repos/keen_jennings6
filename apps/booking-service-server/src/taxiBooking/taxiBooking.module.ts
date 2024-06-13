import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxiBookingModuleBase } from "./base/taxiBooking.module.base";
import { TaxiBookingService } from "./taxiBooking.service";
import { TaxiBookingController } from "./taxiBooking.controller";
import { TaxiBookingResolver } from "./taxiBooking.resolver";

@Module({
  imports: [TaxiBookingModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxiBookingController],
  providers: [TaxiBookingService, TaxiBookingResolver],
  exports: [TaxiBookingService],
})
export class TaxiBookingModule {}
