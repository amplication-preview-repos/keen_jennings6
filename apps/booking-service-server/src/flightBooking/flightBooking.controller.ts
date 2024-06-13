import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FlightBookingService } from "./flightBooking.service";
import { FlightBookingControllerBase } from "./base/flightBooking.controller.base";

@swagger.ApiTags("flightBookings")
@common.Controller("flightBookings")
export class FlightBookingController extends FlightBookingControllerBase {
  constructor(
    protected readonly service: FlightBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
