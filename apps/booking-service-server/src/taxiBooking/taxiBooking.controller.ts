import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxiBookingService } from "./taxiBooking.service";
import { TaxiBookingControllerBase } from "./base/taxiBooking.controller.base";

@swagger.ApiTags("taxiBookings")
@common.Controller("taxiBookings")
export class TaxiBookingController extends TaxiBookingControllerBase {
  constructor(
    protected readonly service: TaxiBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
